export default function CreateProduct() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        method="post"
        className="flex flex-col gap-5 w-max mx-auto bg-base-200 p-10 rounded-xl"
      >
        {/* title */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            What is the product title?
          </legend>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Enter product title here.."
          />
        </fieldset>

        {/* description */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            What is the product description?
          </legend>
          <textarea
            className="textarea"
            type="text"
            name="description"
            placeholder="Enter product description here.."
          />
        </fieldset>
        {/* submit button */}
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}
