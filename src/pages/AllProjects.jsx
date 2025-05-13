import { Link } from 'react-router-dom';

export default function AllProjects() {
  return (
    <div className="max-w-3xl mx-auto px-2 py-8">
      <h1 className="text-4xl text-[rgb(106,188,104)] font-lilex font-normal mb-14 text-center">All Projects</h1>

      <ul className="list bg-base-100 rounded-xl font-lilex">
        {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">All Projects</li> */}

        {/* Project 1 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/dna.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/next_generation_sequencing_analysis_in_python"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Next Generation Sequencing Analysis Pipeline
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Demonstrate a working NGS sequencing pipeline using Python.
            </p>
          </div>
        </li>

        {/* Project 2 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/histopathologic_cancer.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/histopathologic_cancer_detection"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Histopathologic Cancer Detection
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Deep learning cancer detection using CNNs and transfer learning.
            </p>
          </div>
        </li>

        {/* Project 3 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/cell_segmentation.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/cell_segmentation"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Cell Image Segmentation
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Train a CNN architecture to perform semantic image segmentation of cells from microscope images.
            </p>
          </div>
        </li>

        {/* Project 4 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/chest_xray.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/chest_xray_gan"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Chest X-Ray GAN
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Implement a GAN model to generate novel chest x-ray scans.
            </p>
          </div>
        </li>

        {/* Project 5 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/cluster_plot.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/lymphoma_microarray_clustering"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Lymphoma Microarray Clustering
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Applies K-Means clustering and dimensionality reduction to classify lymphoma genetic profiles.
            </p>
          </div>
        </li>

        {/* Project 6 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/question_answer.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/wikipedia_question_answer"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Wikipedia Q&A Model
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Apply standard text preprocessing methods and build an unsupervised NLP model that answers user's questions.
            </p>
          </div>
        </li>


        {/* Project 7 */}
        <li className="list-row">
          <div><img className="size-14 rounded-md" src="/img/project-thumbnails/time_series.png" /></div>
          <div className="flex flex-col">
            <Link
              to="/projects/details/airbnb_time_series"
              className="text-lg font-semibold hover:text-[rgb(86,162,238)] leading-snug mb-1">
                Airbnb Time Series Forecasting
            </Link>
            <p className="text-md text-neutral-500 list-col-wrap leading-snug">
              Preprocess Airbnb user registration data with smoothing techniques. Use ACF / PACF plots to select model parameters.
            </p>
          </div>
        </li>
        
      </ul>
    </div>
  );
}
