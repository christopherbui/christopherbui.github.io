import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Resume() {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: 'Christopher_Bui_Resume',
  });

  return (
    <div className="py-20 px-4 bg-base-100 min-h-screen font-lilex">
      <div className="flex justify-center mb-8 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-[rgb(232,171,28)] text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Download as PDF
        </button>
      </div>

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg px-8 py-10 text-neutral-800"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(232,171,28)]">Christopher Bui</h1>
          <p className="text-md mt-2 text-neutral-500">
            cbui3@pm.me · (714) 334-2810 · <a href="https://www.cbui.me">cbui.me</a><br />
            <a href="https://linkedin.com/in/cbui3">LinkedIn</a> · <a href="https://github.com/christopherbui">GitHub</a>
          </p>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl text-[rgb(86,162,238)] font-semibold mb-2">Education</h2>
          <p><strong>Johns Hopkins University</strong> — M.S. Bioinformatics (2022)</p>
          <p><strong>UC San Diego</strong> — B.S. Biophysics, Minor in Entrepreneurship (2018)</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-[rgb(106,188,104)] font-semibold mb-2">Experience</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium">SCAN Health Plan – Data Scientist</h3>
            <p className="text-sm text-neutral-500">Remote | Nov. 2023 – May 2024</p>
            <ul className="list-disc ml-5">
              <li>Developed optimized SQL queries on Azure to analyze patient EHR and claims data</li>
              <li>Led development of KGE, CART, and DNN models to predict high-risk patients</li>
              <li>Deployed ML models and evaluated them with AUC-ROC metrics for plan eligibility</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Edwards Lifesciences – Clinical Programming Analyst (Contract)</h3>
            <p className="text-sm text-neutral-500">Irvine, CA | Oct. 2023 – Nov. 2023</p>
            <ul className="list-disc ml-5">
              <li>Preprocessed KPI data using PySpark for schema consistency</li>
              <li>Enhanced Python Dash dashboards to improve clinical data usability</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Bio-Rad Laboratories – Data Scientist</h3>
            <p className="text-sm text-neutral-500">Irvine, CA | Sep. 2023 – Oct. 2023</p>
            <ul className="list-disc ml-5">
              <li>Wrote optimized Snowflake SQL for PowerBI dashboards</li>
              <li>Performed profit margin analysis to improve product strategy</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">JHU Applied Physics Lab – Data Scientist</h3>
            <p className="text-sm text-neutral-500">Laurel, MD | Aug. 2022 – Jul. 2023</p>
            <ul className="list-disc ml-5">
              <li>Built ETL pipelines to preprocess hospital IoT sensor data</li>
              <li>Trained ML models for hazardous OR condition prediction</li>
              <li>Ran SARS-CoV-2 protein simulations using HPC/SLURM</li>
              <li>Developed KGE models for COVID protein target discovery</li>
              <li>Analyzed PPE inventory with PySpark for supply chain insights</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">3M – ML Engineer Intern</h3>
            <p className="text-sm text-neutral-500">Silver Spring, MD | Jun. 2020 – Aug. 2020</p>
            <ul className="list-disc ml-5">
              <li>Preprocessed large-scale medical records using PySpark + NLTK</li>
              <li>Created text embeddings for ICD-10 code recommendation</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl text-[rgb(181,114,232)] font-semibold mb-2">Projects</h2>
          <ul className="list-disc ml-5">
            <li><strong>Cancer Tissue Detection:</strong> CNN + transfer learning to classify cancerous tissue (86% accuracy)</li>
            <li><strong>Cell Segmentation:</strong> U-Net model in TensorFlow to segment nuclei from microscopy images</li>
            <li><strong>Lymphoma Microarray:</strong> PCA and clustering on cancer gene expression data</li>
            <li><strong>NGS Pipeline:</strong> Python-based SRA sequencing analysis for variant calling</li>
          </ul>
        </section>

        <section className="mb-2">
          <h2 className="text-2xl text-[rgb(245,118,118)] font-semibold mb-2">Skills</h2>
          <p><strong>Technologies:</strong> Python, R, Java, HTML/CSS/JS, SQL, PySpark, AWS, Azure, Snowflake, Tableau, PowerBI, Git, HPC, SLURM</p>
          <p><strong>Libraries:</strong> Scikit-Learn, TensorFlow, PyTorch, PyKeen, Optuna, Pandas, NumPy, OpenCV</p>
          <p><strong>Concepts:</strong> Deep Learning, KGE, NLP, CV, Time Series, A/B Testing, Statistical Analysis, Data Viz</p>
        </section>
      </div>
    </div>
  );
}
