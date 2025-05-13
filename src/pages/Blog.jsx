import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="max-w-2xl mx-auto px-2 pt-8 pb-20">
      <h1 className="text-4xl text-[rgb(181,114,232)] font-lilex font-normal text-center mb-14">Blog</h1>

      <ul className="space-y-4 list-disc list-outside pl-6 font-lilex text-lg text-neutral-500">
        <li>
          <Link to="/projects/details/next_generation_sequencing_analysis_in_python" className="text-[rgb(86,162,238)] hover:underline">
            Next Generation Sequencing Analysis in Python
          </Link>
        </li>

        <li>
          <Link to="/projects/details/histopathologic_cancer_detection" className="text-[rgb(86,162,238)] hover:underline">
            Histopathologic Cancer Detection
          </Link>
        </li>

        <li>
          <Link to="/projects/details/cell_segmentation" className="text-[rgb(86,162,238)] hover:underline">
            Cell Image Segmentation
          </Link>
        </li>

        <li>
          <Link to="/projects/details/chest_xray_gan" className="text-[rgb(86,162,238)] hover:underline">
            Chest X-Ray Generative Adversarial Network
          </Link>
        </li>

        <li>
          <Link to="/projects/details/lymphoma_microarray_clustering" className="text-[rgb(86,162,238)] hover:underline">
            Lymphoma Cancer Microarray Clustering Analysis
          </Link>
        </li>
        
        <li>
          <Link to="/projects/details/wikipedia_question_answer" className="text-[rgb(86,162,238)] hover:underline">
            Wikipedia Question & Answer Model
          </Link>
        </li>

        <li>
          <Link to="/projects/details/airbnb_time_series" className="text-[rgb(86,162,238)] hover:underline">
            Airbnb Time Series Forecasting
          </Link>
        </li>
      </ul>
    </div>
  );
}
