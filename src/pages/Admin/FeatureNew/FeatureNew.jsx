import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classes from "./FeatureNew.module.css";
import { addFeature } from "../../../store/slices/features/featuresApi";

const FeatureNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const description = e.target.description.value.trim();
        const icon = e.target.icon.value.trim();

        if (title && description && icon) {
            dispatch(
                addFeature({
                    title,
                    description,
                    icon,
                })
            );

            navigate("/dashboard/features");
        }
    };

    return (
        <div className={classes.add}>
            <form onSubmit={handleSubmit}>
                <input type="text" autoComplete="off" name="title" placeholder="Title" required />
                <input type="text" name="description" autoComplete="off" placeholder="Description" required />
                <input type="text" autoComplete="off" name="icon" placeholder="Icon link" required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default FeatureNew;
