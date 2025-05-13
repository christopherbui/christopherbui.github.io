# Cellular Nucleus Image Segmentation

The [2018 Data Science Bowl](https://www.kaggle.com/c/data-science-bowl-2018) Kaggle competition caught my attention for its potential to have a profoundly practical impact in the biotechnology industry. This post covers my overall experience while a detailed summary of my work can be found on my [Github](https://github.com/ChristopherBui3/Metis_Projects/tree/master/Project_5).

## The Challenge

Given microscope images of many types of nuclei taken in varying environment conditions, build a machine learning model that can detect the nuclei.

![Microscope Image 1](https://miro.medium.com/v2/resize:fit:256/format:webp/1*9b9f2tRiPFTFFp1xZ1jELA.png)
![Microscope Image 2](https://miro.medium.com/v2/resize:fit:256/format:webp/1*Aptq4JDtekvWT7deg5aenA.png)
![Microscope Image 3](https://miro.medium.com/v2/resize:fit:256/format:webp/1*aTUmmwgopDzsXCcY8Hz3wg.png)

## Motivation

The goal of this challenge is to establish a foundation for the ability to quantify a facet of a biological system. Specifically, by having a model that can segment out nuclei among the messiness in a microscope image, one can apply currently available software to count the number of detected nuclei. Knowing the number of nuclei in a biological sample allows scientists to quantify their observations rather than “eye-balling” them. For example, in the realm of drug discovery research, after applying a test drug to a batch of cells, this model would be able to report whether the cell count increased or decreased in response to the drug. Furthermore, traditional software methods that perform this same task are limited in their abilities and can take days to a week to accomplish. By decreasing the time of this task, I can only imagine costs for related research to decrease and the opportunities of discovering a beneficial drug to come sooner.

This [video](https://www.youtube.com/watch?v=Dbiq6l50zO8) from the challenge's organizer expands on the motivation.

## Code

The project's [code](https://github.com/christopherbui/machine-learning-projects/tree/main/nucleus-image-segmentation) is available as a python script within the *code* directory provided.

## Model

This project's challenge is an image segmentation problem. There are numerous convolution neural network (CNN) architectures, each apt for a certain task. For biomedical applications however, the U-Net architecture has proven to be quite successful. So accordingly, I built my model based on that architecture. My goal was to utilize the U-Net CNN to segment the nuclei apart from miscellaneous objects in the images.

![U-Net Architecture](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lvXoKMHoPJMKpKK7keZMEA.png)

The training data consists of 670 raw microscope images. In addition, each raw image has its respective binary mask, a separate image such that white pixels designate nuclei-present regions, and black pixels designate nuclei-absent regions. The binary masks had been manually labeled by the competition’s organizers. We need these binary masks so that the model has a reference to know whether it has segmented nuclei correctly or not during the training stage.

![mask image 1](https://miro.medium.com/v2/resize:fit:256/format:webp/1*uzpJ5fAttbS5MwUWFGMQRw.png)
![mask image 2](https://miro.medium.com/v2/resize:fit:256/format:webp/1*lytQCbnJRChFdAedPgcraA.png)
![mask image 3](https://miro.medium.com/v2/resize:fit:256/format:webp/1*_a5MxYFrV2g85vKAHCnbog.png)

I then trained the model on 600 images, setting aside 70 for the test set.

## Results

Here is the [U-Net architecture Python code.](https://github.com/christopherbui/Metis_Projects/blob/master/Project_5/code/model.py) After training the model, I test it on the 70 images from the test set. For each test image, the model returns a predicted binary image. We evaluate the performance of the model by overlaying the original image’s binary mask over the predicted result. From this, we see regions where the model predicted correctly and incorrectly.

![original img, ground truth, model prediction, truth-prediction overlap](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ySbKLMK9TqhIpREgOQ3FUw.png)

- Yellow: True Positive
- Black: True Negative
- Green: False Positive (Error)
- Red: False Negative (Error)

To quantify the model’s performance, I used the Jaccard Distance (a.k.a. Intersection Over Union) metric. This Jaccard Distance value is calculated by taking the area of regions where nuclei was predicted correctly (true positives), and dividing that value by the sum of the false negative, false positive, and true positive areas.

Jaccard Distance = True Positive / (True Positive + False Negative + False Positive)

This metric value thus ranges between 0 to 1. A perfect score of 1 translates to the model being able to detect all regions of nuclei without any false negatives and false positives.

For the 70 test images, my average Jaccard Distance equaled 0.75. This means that on average, the model was able to correctly detect quite a significant portion of all nuclei.

## Conclusion

The results show that the U-Net architecture works satisfactorily in segmenting out regions of nuclei. Although not 100% optimal, the outcome is adequate for a biologist’s line of work and needs.

The model consistently captures large chunks of nuclei, and any regions of error are insignificant for the interests of a biologist. With the significant portions of segmented nuclei, you can apply other software to now count their number or calculate their size. This will enable a biologist to perform a cell count, but in a much shorter amount of time compared to traditional methods. The notable Python library OpenCV has object detection functionality that can be used to achieve this.

Nevertheless, a common challenge persists in the situation where the nuclei overlap. How does the model distinguish between 2 or more overlapping nuclei versus a single one?

My rudimentary proposed work-around to this problem is to measure the average nucleus size (topical area in this case since an image depicts a 2D representation of the nuclei) for a type of cell. Then after the model returns a binary image for the same type of nucleus, identify connected white pixel regions that have an area greater than the average nucleus size, within a reasonable amount of error. If such a region surpasses an arbitrary threshold of say 1.5 times the average, then count this region as 2 nuclei. I repeat that this is a crude proposal, and that it only applies to a single type of nuclei as distinct types of nuclei vary in size. Further exploration of this challenge is left for future work.

Overall, the goal of this Kaggle competition was to implement a machine learning model that could segment nuclei, and I say my efforts were quite satisfactory.

If this task could be further improved by accounting for the problem described above, then I see the potential where such a capable model could be commercialized as a software product for biology researchers in academia and industry alike for its practical usefulness.
