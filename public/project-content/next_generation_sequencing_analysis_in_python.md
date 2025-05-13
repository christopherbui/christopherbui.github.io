# Next Generation Sequencing Analysis Pipeline

Here we demonstrate automating a traditional **next generation sequencing (NGS)** analysis pipeline using Python. The steps for NGS analysis are shown below.

| Step | Description | Tools |
|:-----|:------------|:------|
| 1. Download Data | Fetch raw sequencing data | SRA Toolkit, Python |
| 2. Quality Control | Assess data quality | FastQC |
| 3. Preprocessing | Trim adapters and filter low-quality reads | Trimmomatic, Cutadapt |
| 4. Alignment | Align reads to a reference genome | BWA, Bowtie2 |
| 5. BAM Processing | Convert, sort, and index BAM files | Samtools |
| 6. Variant Calling | Identify SNPs and indels | FreeBayes, GATK |
| 7. Annotation | Add biological context to variants | ANNOVAR, SnpEff |
| 8. Visualization | Visualize and generate reports | Pandas, Matplotlib |

## Data

The **Sequence Read Archive (SRA)** is the largest publicly available repository of high throughput sequencing data.

**SRA Database**: [Here.](https://www.ncbi.nlm.nih.gov/sra)

We'll use **E. Coli** as the genome of choice for its simplicity and low memory footprint for efficient demonstration.

**E. Coli Sequencing Run ID**: SRR31041149

## Code

The NGS analysis python [code](https://github.com/christopherbui/bioinformatics-projects/blob/main/ngs-analysis/code/NGS_analysis_pipeline.ipynb) is presented in a Jupyter Notebook. This article explains the general principles, and the notebook demonstrates implementing the code at each step.

## Tools

We'll be using some binaries for processing and filtering sequencing reads in FASTQ files.

**SRA Toolkit Download**: [Here.](https://github.com/ncbi/sra-tools/wiki/01.-Downloading-SRA-Toolkit)

## Background

In NGS, the original genome or transcript is randomly fragmented into small pieces, and these pieces are sequenced. The sequence and its accompanying base quality score encompasses a single read, and multiple reads are in a single FASTQ file.

**Note**: Reads do not represent contiguous segments of the original sequence, since they are randomly fragmented.

To mitigate gaps in sequence coverage, NGS workflows utilize high coverage and overlapping reads to recover missing information.

There are two types of accession numbers that one might see on NCBI's SRA database: **SRR** and **SRX**.

**SRR (SRA Run)**

- Example: SRR31041149 is the run accession.
- It represents the sequencing data generated from a specific sequencing experiment. A single run corresponds to a single sequencing run, which could be a paired-end or single-end dataset.
- **Paired-end reads**: Sequencing approach where both ends of DNA/RNA fragment are sequenced, providing 2 complementary reads: one 5' to 3' (**read 1**) and the other 3' to 5' (**read 2**) direction.
  - Tools use both reads to determine correct alignment of fragment to repetitive regions or complex genomes.
  - Helps detect insertions, deletions, inversions, or mutations by comparing discrepancies between reads.
  - For RNA-seq, helps detect alternative splicing events.
  - Reads are stored in 2 .fastq files.

**SRX (SRA Experiment)**

- Example: SRX040724
- It represents the full experiment, which usually includes multiple runs (multiple SRR accessions).

### Interpreting FASTQ Files

It is common to see file extensions such as FASTQ or FASTA. Both contain nucleotide sequences, but FASTQ contains quality score for each base in the same file.

**Quality score** is represented by certain ASCII characters:

```
`!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
```

More on Bioinformatics file formats: [https://bioinformaticsworkbook.org/introduction/fileFormats.html#gsc.tab=0](https://bioinformaticsworkbook.org/introduction/fileFormats.html#gsc.tab=0)

Traditionally, long sequences are split into multiple reads (each read is 4 lines) within the same file, with "+" or "@" used as separators. This gets confusing to account for, more so in FASTQ with quality score ASCII characters.

Today, Illumina's software can do high quality short-reads (~100 base pairs), so every 4 lines in a FASTQ file is a read with information for a 100 fragment of the larger sequence.

Example for 1 read in FASTQ file:

```
@HISEQ:402:H147CADXX:1:1101:1250:2208 1:N:0:CGATGT TGATGCTGCNAATTTTATTCAGTCAGCGGAGGGGGCTTACGTGTATTTTCTGCAACCTTT
+
CCCFFFFFH#4AFIJJJJJJJJIJJJJJJJJJJJJJJJJJJHHHHHHFFFFFFFEEEEED
```

### Adapter Contamination

**Adapters**: Short DNA sequences ligated to ends of DNA/RNA fragments during library preparation.

Adapters allow for fragments to bind to sequencing flow cell and serve as priming sites for sequencing.

- Sequence flow cell preparation -> Library Preparation Process (bind adapters) -> sequencing -> analysis
- The fragments of Adapters that have ligated to sequence undergo PCR amplification to create enough material for sequencing.

Adapter contamination occurs when adapter sequences are not removed during the sequencing reads. This causes adapter sequences to appear in the raw data and affects analysis including alignment, assembly, and variant calling.

**Causes**:

1. **Short DNA Fragments**: If fragment (i.e. 50bp) is shorter than read length (i.e. 100bp), then sequencer will read into the adapter sequence.
2. **Incomplete Trimming**: Adapter trimming software may miss some adapter sequences, leaving them in the FASTQ reads.
3. **Over-amplification in PCR**:
   - If PCR runs for too many cycles, the adapter-ligated sequences are replicated too many times in sequence, causing multiple adapter copies in a single read.
   - Need to apply correct number of PCR cycles (8-12).
   - If over-amplification has occurred in reads, use software like `Trimmomatic` or `Cutadapt` to remove them.

## Pipeline

During the *Quality Control* step using *FastQC*, we need to convert the downloaded .sra file to a .fastq format. Use *fastq-dump* from SRA Toolkit for this task.

For paired-end reads, the output above will yield 2 .fastq files. One file corresponds to the forward read, and the other to the reverse read.

A report of quality statistics are presented within the output HTML files for each paired-end read.

**Interpreting the HTML Report**

1. **Per Base Sequence Quality**: Shows box and whisker plot of quality score for each base
2. **GC Content**: Verify if it matches expectations (i.e. ~50% if using an E. coli SRR accession)
3. **Adapter Content**: Alerts of adapter presence; Will trim them in the Trimming and Filtering step
4. **Sequence Duplication**: High levels of duplication might indicate PCR bias

After generating the HTML report with *fastqc* and if adapter contamination is present, we can apply *trimmomatic* from the SRA Toolkit to remove adapters or low-quality bases at the sequence ends.

For alignment step: We'll use the provided E. Coli sequence as the reference genome.

Then, we need to index the reference genome so that the alignment software can perform alignment with the trimmed, paired reads faster.

**Indexing Steps**

1. Break reference genome into subsequences
2. Create hash table for the positions of these fragments
3. Compress & store auxiliary data to optimize searching

Index files allow alignment software to perform fast lookups and avoid linear searching for every read.

After alignment, convert the sequence alignment map to a binary alignment map **(BAM)** for faster lookup.

Then, filter variants by quality score. We don't want to have **false positives** when calling variants.

Summary statistics for the filtered variants can be viewed using *bcftools*.

The [Integrative Genomics Viewer](https://igv.org/doc/desktop/) tool allows us to visualize aligned reads and called variants. Simply load the aligned BAM file, reference genome, and overlay the VCF file to identify variant locations.

## Going Forward

Explained above, and through the associated [Jupyter Notebook code](https://github.com/christopherbui/bioinformatics-projects/blob/main/ngs-analysis/code/NGS_analysis_pipeline.ipynb) was a traditional statistical approach to identifying variants of a genomic sequence relative to a reference genome.

Today there are machine learning based callers such as **DeepVariant** by Google that are based on CNNs to call SNPs and indels (insertions / deletions). Another ML-based variant caller is **Clair3**.

In addition to identifying variants, machine learning models today can also:

- Predict epigenetic modifications based on DNA methylation data
- Predict functional regulatory regions in the genome based on ATAC-seq data
- Predict effects of protein mutations or drug response
- Classify the type of variants (somatic vs germline)
