import { useMemo } from "react";

const Preview = ({ path }) => {
    return (
        path && <div className='rounded p-1 m-5' style={{ width: "30%", height: "300px", backgroundImage: `url(${path})`, backgroundSize: "cover" }} >

        </div>
    )
}
const UploadForm = ({ input, isVisible, onSubmit, onChange }) => {

    const isDisabled = useMemo(() => {
        return !!Object.values(input).some((item) => !item)
    }, [input])
    return (
        isVisible && <>
            <p className="display-6 text-center mb-3">Upload Stock Image</p>
            <div className="mb-5 d-flex align-items-center justify-content-center">
                <Preview {...input} />
                <form className="mb-2" style={{ textAlign: "left" }} onSubmit={onSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="title"
                            aria-describedby="text"
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="file" className="form-control" name="file" onChange={onchange} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success float-end"
                        disabled={isDisabled}
                    >
                        Save changes
                    </button>
                </form>
            </div>
        </>
    );
};
export default UploadForm;  