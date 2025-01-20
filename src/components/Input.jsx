// Added to make NewProject.jsx a bit cleaner and organized

export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label>{textarea ? <textarea {...props} /> : <input {...props} />}</label>
    </p>
  );
}
