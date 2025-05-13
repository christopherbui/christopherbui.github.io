import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-2 pt-8 pb-20">
      <h1 className="text-4xl text-[rgb(106,188,104)] font-lilex font-normal mb-6 text-center">Highlighted Projects</h1>

            {/* View All Projects button */}
      <div className="mb-8 flex justify-end">
        <Link to="/all-projects" className="px-4 py-2 rounded-lg text-white font-lilex bg-[rgb(86,162,238)] hover:bg-[rgb(66,142,218)] transition">
          View All Projects →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 font-lilex">

        {/* Project 1 */}
        <div className="card bg-base-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.06]">
          <figure className="pt-8 pb-4">
            <img className="w-fit h-36 object-cover rounded-md" src="/img/project-thumbnails/dna.png" alt="NGS Analysis Pipeline"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Next Generation Sequencing Analysis Pipeline</h2>
            <p className="text-neutral-500">Demonstrate a working NGS sequencing pipeline using Python.</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/christopherbui/bioinformatics-projects/blob/main/ngs-analysis/code/NGS_analysis_pipeline.ipynb"
                className="btn btn-soft btn-sm btn-primary">
                  Code
              </a>
              <Link to="/projects/details/next_generation_sequencing_analysis_in_python" className="btn btn-soft btn-sm btn-secondary">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card bg-base-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.06]">
          <figure className="pt-8 pb-4">
            <img className="w-fit h-36 object-cover rounded-md" src="/img/project-thumbnails/histopathologic_cancer.png" alt="Histopathologic Cancer Detection"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Histopathologic Cancer Detection</h2>
            <p className="text-neutral-500">Deep learning cancer detection using CNNs and transfer learning.</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/christopherbui/machine-learning-projects/blob/main/histopathologic-cancer-detection/cancer_detection.ipynb"
                className="btn btn-soft btn-sm btn-primary">
                  Code
              </a>
              <Link to="/projects/details/histopathologic_cancer_detection" className="btn btn-soft btn-sm btn-secondary">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card bg-base-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.06]">
          <figure className="pt-8 pb-4">
            <img className="w-fit h-36 object-cover rounded-md" src="/img/project-thumbnails/cell_segmentation.png" alt="Cell Image Segmentation"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cell Image Segmentation</h2>
            <p className="text-neutral-500">Train a CNN architecture to perform semantic image segmentation of cells from microscope images.</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/christopherbui/machine-learning-projects/tree/main/nucleus-image-segmentation"
                className="btn btn-soft btn-sm btn-primary">
                  Code
              </a>
              <Link to="/projects/details/cell_segmentation" className="btn btn-soft btn-sm btn-secondary">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="card bg-base-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.06]">
          <figure className="pt-8 pb-4">
            <img className="w-fit h-36 object-cover rounded-xl" src="/img/project-thumbnails/chest_xray.png" alt="Chest X-Ray GAN"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Chest X-Ray Generative Adversarial Network</h2>
            <p className="text-neutral-500">Implement a GAN model to generate novel chest x-ray scans.</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/christopherbui/machine-learning-projects/blob/main/chest-xray-gan/chest_xray_gan.ipynb"
                className="btn btn-soft btn-sm btn-primary">
                  Code
              </a>
              <Link to="/projects/details/chest_xray_gan" className="btn btn-soft btn-sm btn-secondary">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="card bg-base-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.06]">
          <figure className="pt-8 pb-4">
            <img className="w-fit h-36 object-cover rounded-md" src="/img/project-thumbnails/cluster_plot.png" alt="Lymphoma Microarray Clustering Analysis"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lymphoma Cancer Microarray Clustering Analysis</h2>
            <p className="text-neutral-500">Applies K-Means clustering and dimensionality reduction to classify lymphoma genetic profiles.</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/christopherbui/machine-learning-projects/blob/main/lymphoma-microarray-analysis/CancerMicroarray_KMeansClustering.ipynb"
                className="btn btn-soft btn-sm btn-primary">
                  Code
              </a>
              <Link to="/projects/details/lymphoma_microarray_clustering" className="btn btn-soft btn-sm btn-secondary">
                Details
              </Link>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="card bg-base-100 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.06]">
          <figure className="pt-8 pb-4">
            <img className="w-fit h-36 object-cover rounded-md" src="/img/project-thumbnails/question_answer.png" alt="Wikipedia Question & Answer Model"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Wikipedia Question & Answer Model</h2>
            <p className="text-neutral-500">Apply standard text preprocessing methods and build an unsupervised NLP model that answers user's questions.</p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/christopherbui/machine-learning-projects/tree/main/wikipedia-question-answer"
                className="btn btn-soft btn-sm btn-primary">
                  Code
              </a>
              <Link to="/projects/details/wikipedia_question_answer" className="btn btn-soft btn-sm btn-secondary">
                Details
              </Link>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}
