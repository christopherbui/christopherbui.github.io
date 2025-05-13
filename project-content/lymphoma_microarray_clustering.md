# Lymphoma Microarray Cancer Clustering Analysis

With the ever-growing capabilities of computational hardware along with advancing machine learning (ML) principles, the biomedical sector is seeing increased ML applications on genomic data that allows researchers to gain better insight at a more convenient pace than traditional methods.

The objective of this post is to demonstrate the application of microarray analysis on a lymphoma dataset. Specifically, Principle Component Analysis is applied on the high dimensional genetic dataset, followed by a simple implementation of K-Means Clustering. The end result is a binary classification of Non-Hodgkin’s Lymphoma samples as either follicular or diffuse

## Code

The project's code is provided [here](https://github.com/christopherbui/machine-learning-projects/blob/main/lymphoma-microarray-analysis/CancerMicroarray_KMeansClustering.ipynb).

## Background

The lymphatic system is the part of the body’s immune system, consisting of various organs including the lymph nodes, spleen, and thymus gland. **Lymphocytes** are a type of white blood cells whose purpose is to fight against diseases in the body. As such, **Lymphoma** is a cancer resulting from these lymphocytes acquiring mutative properties that eventually culminate within the aforementioned organs. Those infected experience fatigue and weightloss along with a heavily compromised immune system, increas...

A [microarray](https://www.nature.com/scitable/definition/microarray-202/) is a physical template where small DNA segments (probes) are placed. Lymphoma mRNA is converted to cDNA for complementary probe binding and tagged with fluorescent dye. Active genes in either a follicular or diffuse lymphoma sample will have its cDNA segments bind to the predetermined probes on the microarray. Binding implies that certain genes are active and is indicated by an observable fluorescence. The strength of the fluor...

Microarrays are useful as it allows us to determine what types of genes are active in certain cell samples which can help us classify the cell type. This classification part is what the machine learning model aims to accomplish.

## Dataset

The [microarray dataset](https://ico2s.org/datasets/microarray.html) used is from the Interdisciplinary Computing and Complex BioSystems [ICOS research group](https://ico2s.org/index.html). It is labeled *10-fold diffuse large B-cell lymphoma dataset*.

A slight tangent. One gripe I have with many machine learning articles is the implied nature or lack of adequate explanation of the dataset. As such, I will do my best here to give the reader the clearest understanding of the data.

The data collected from a microarray analysis is essentially represented as a tabular format, with rows and columns.

In this case, the features (columns) are the genetic probes in the microarray that bind to any available complementary segments of cDNA. The observations (rows) are individual lymphoma samples that underwent microarray analysis. In simpler terms, each row can represent a patient who submitted their cell samples for testing.

Genomic data naturally contains an exorbitant number of features, causing a machine learning algorithm’s performance to suffer from the [curse of dimensionality](https://towardsdatascience.com/the-curse-of-dimensionality-50dc6e49aa1e). As a result, the original researchers applied Partial Least Squares feature selection to select the top 31 features that capture the most variance, or information, of the microarray data.

The dimensions of the dataset (rows x columns):

**Raw Data**: 77 x 7129

**PLS Feature Selection**: 77 x 31

Of the 77 samples, the class balance is:

**diffuse**: 58

**follicular**: 19

We’ll set aside 8 samples for the test set.

## Data Preprocessing

We could perform analysis on the 31 features, but spatial visualization would not be possible. To accomplish this, we’ll perform PCA using 2 components to compress the data onto 2D space that captures the most variance. PCA with 3 components is also shown, but clustering will be performed using 2 PC. Normalization of the data is included in this process.

**PCA Applied**: 77 x 2

![Dataset 2 Principal Components](https://miro.medium.com/v2/resize:fit:800/format:webp/1*qqyFq85ClOa9t3J0tfd_VQ.png)
![Dataset 3 Principal Components](https://miro.medium.com/v2/resize:fit:806/format:webp/1*JL1tLRrZ77vA-7Y2A4LgVg.png)

Outliers are present in this dataset, specifically 2 in the diffuse class. Calculating the ground truth centroids using the provided class labels, we removed several outliers using [absolute deviation around the median](https://www.sciencedirect.com/science/article/abs/pii/S0022103113000668) to optimize our semi-supervised K-Means model training. In a pure unsupervised K-Means, outlier removal is only possible after training. The centroids are in dark pink and blue. The outliers are the black-border blue.

![Outliers](https://miro.medium.com/v2/resize:fit:804/format:webp/1*0IADzlAgEbOZivqWwstvRw.png)

## K-Means Model

Here is the python [code](https://github.com/christopherbui/ml-projects/blob/main/cancer_microarray_analysis/CancerMicroarray_KMeansClustering.ipynb).

Since the labels are provided, we know that K = 2 clusters. In a pure unsupervised K-Means, labels are unknown and K is determined using an [elbow plot](https://www.analyticsvidhya.com/blog/2021/01/in-depth-intuition-of-k-means-clustering-algorithm-in-machine-learning/).

We seek to minimize the Euclidian distance between each point and its respective cluster between iterations of centroid updates.

![minimize loss function](https://miro.medium.com/v2/resize:fit:1104/format:webp/1*riInbzp5CiuMOOq8rldQ7w.png)

The process is as follows:

1. Initialize 2 random centroids in 2 PC space
2. Assign points to closest centroid
3. Update centroids by finding average of points in each cluster
4. Repeat steps 2–3

The final centroids may not be optimal due to the random initialization, and given that the loss is not concave with a global minimum. Multiple iterations may be required to observe a suitable average of final centroid values.

This semi-supervised K-means implementation is possible with the provided class labels, which allows us to calculate the accuracy of model.

Below, we observe the trained model:

![K-means Model, No Outliers](https://miro.medium.com/v2/resize:fit:804/format:webp/1*j22i56R8Wb1gLWVD6aVJ2w.png)

## Discussion

The centroids are positioned such that they more or less encompass each half of the general area covered by the data points. This is because the “density” of the points are close to uniform. We can see that the centroids are slightly shifted below the horizontal half of the data because the density of points there is higher.

Comparing the above image to the first, we can see that the model fails to correctly classify the upper left points. K-Means is highly sensitive to the training data, and as such, removing outliers is necessary.

**Training Acc**: 79.10%

**Test Acc**: 50.00%

Due to the nature of the training data, K-Means may not be the best performer here.

From the naked eye, we can better classify these points by drawing a single line from 0.5 on the y-axis to 1 on the x-axis of the images shown. This could be performed by [SVM](https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47). From testing this, we got:

**Training Acc**: 95.52%

**Test Acc**: 87.50%

Here we have shown the application of a semi-supervised K-Means on a genomic dataset after applying dimensionality reduction techniques. We were able to examine the model’s training performance given the original researchers had provided the label annotations. With the emergence of machine learning in the biosciences, we can apply such techniques to expedite research efforts.
