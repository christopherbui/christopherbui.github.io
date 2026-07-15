# Histopathologic Cancer Detection

Relating to giving appropriate medical diagnosis, medical professionals are tasked with determining the validity and presence of any indicators that signal a disease. However, even among the best professionals, there is the possibility of human error. With image segmentation and classifier models becoming increasingly advanced through the years, the potential for them to aid in medical diagnosis by picking up potential misses by doctors appears more realistic.

Utilizing the popular deep learning PyTorch library to classify microscope tissue images as either containing cancer or not. In addition to my own model, I'll show how the use of **transfer learning** can expedite model training and performance.

## Code

The [code](https://github.com/christopherbui/machine-learning-projects/blob/main/histopathologic-cancer-detection/cancer_detection.ipynb) is presented and documented in a Jupyter notebook that provides step-by-step explanations.

## Data

The [dataset](https://www.kaggle.com/c/histopathologic-cancer-detection/data) is available on Kaggle, and consists of 277,483 unique tissue images of lymph node cross sections. Images belong to one of two classes: no cancer, or cancer. Upon inspection, the dataset appears moderately balanced.

![data balance](/img/project-images/histopathologic-cancer-detection/data_balance.png)

Below are a few randomly sampled images:

![sample train images](/img/project-images/histopathologic-cancer-detection/sample_train_images.png)

## Preprocessing

It is standard practice for supervised image-based tasks in machine learning to organize the images into a standard directory structure.

![file structure](/img/project-images/histopathologic-cancer-detection/file_structure.png)

The reason for this is because when we call *torch.utils.data.DataLoader* on these images, the data loader will understand how to partition the data into batches for training.

To simplify and speed up training, 20,000 random images were sampled from the available 200,000, with stratification. This means that the class proportion shown above is preserved within these 20,000 samples.

Even when partitioning data randomly, it's best to be aware of the potential of bad sampling. For example, without stratification, it's possible that we could have sampled a highly unbalanced proportion of images with the cancer label. This would lead to unnecessary complexity in model training.

If you have stronger hardware and resources, feel free to adjust the total number of samples for your model training. A *test_size=0.3* was used. Label 0 coincides with no cancer, whereas label 1 represents having cancer. After sampling and splitting into train and test sets:

- **Train Samples**: 14,000
  - label 0: 8,400
  - label 1: 5,600
- **Test Samples**: 6,000
  - label 0: 3,600
  - label 1: 2,400

## Hardware

Training was performed on the CUDA platform from an RTX 3050 with 4 GB of VRAM.

## Modeling

Both the simple and transfer learning model are based on utilizing a **convolutional neural network (CNN)** architecture. For my simple model, I implemented 2 convolutional blocks followed by a classifier layer. Each convolutional block consists of a sequential series of convolutions, pooling, and activation functions.

A concise explanation of CNNs can be found [here](https://poloclub.github.io/cnn-explainer/).

When I first started learning about CNNs, the biggest challenge was understanding where the number of parameters of a model came from, and how the output's dimensions were determined given an input of a certain dimension.

The basic function for applying a convolution on a 2D image is *nn.Conv2d()*. I'll briefly explain the basic parameters to help elucidate:

**Basic Parameters**:

- *in_channels*: number of channels of the input
  - Channels refer to layers of an input. For RGB images, it would be 3 channels (red, green, blue).
  - In PyTorch tensor format: **[channels, height, width]**
  - When displaying with matplotlib, it's **[height, width, channels]**, which can be achieved using *torch.permute()*.

- *out_channels*: number of layers that the convolution output has
  - For example, *nn.Conv2d(in_channels=3, out_channels=10)* → output dimension: **[10, ? height, ? width]**

- *kernel_size*: height and width of the kernel filter (e.g., 2x2 kernel)

![CNN kernel](/img/project-images/histopathologic-cancer-detection/kernel.gif)

A convolution involves calculating the dot product between the overlaying kernel's values and the input's values, sliding horizontally by *stride*, and creating a new output (feature map).

For an RGB image going through *nn.Conv2d* with *out_channels = 10*, there are **3 × 10 = 30 kernels**. Each output channel also has a bias term.

### Simple Model

For baseline performance, I implemented a simple deep neural network with 2 convolutional blocks.

- Each block: convolution → activation → convolution → activation → pooling
- Output channels after each block: 10
- After the second block: flatten → fully connected layer of 1 neuron (binary classification)

### Transfer Learning Model

Transfer learning allows faster training by importing a model with pre-trained weights. Here, **ResNet50** was used:

Steps:
1. Load pre-trained model
2. Freeze all pre-trained weights
3. Replace the model's fully connected layer with our own 1-neuron output

During training, only the new fully connected layer's weights are tuned.

## Results

### Simple Model

![simple model results](/img/project-images/histopathologic-cancer-detection/simple_results.png)

- Baseline model performs better than random guessing.
- Trained for 30 epochs.
- Overfitting starts around epoch 16.
- Notable performance spikes at epochs 7, 12, 15 — possibly due to local minima during training.
- **Without data augmentation** for simplicity (no horizontal flipping).
- Train loss was consistently higher than test loss — likely due to augmentation complexity during training but not in testing.

### Transfer Learning Model

![transfer learning results](/img/project-images/histopathologic-cancer-detection/transfer_learning_results.png)

- Pre-trained ResNet50 architecture performed better than the simple model.
- Accuracy peaked at about **86%** before overfitting around epoch 7.
- Significantly better than random guessing (~50%).

## Conclusion

We demonstrated how to build a neural network and train/evaluate models using PyTorch, as well as the benefits of transfer learning.

While an optimal 86% accuracy is good for demonstration, real-life medical applications would demand much closer to 100% accuracy.

As models continue to improve, it's important to understand they currently serve as aids rather than complete replacements for medical professionals. Human error happens, and these models can help identify discrepancies between human and machine predictions.
