import { useNavigate, useParams } from "react-router-dom";
import classes from "./FeatureEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectEditableFeature } from "../../../store/slices/features/featuresSlice";
import { fetchFeature, saveFeature } from "../../../store/slices/features/featuresApi";

const FeatureEdit = () => {
    const { id } = useParams();
    const feature = useSelector(selectEditableFeature);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchFeature(id));
    }, [id, dispatch]);

    if (!feature) {
        return <h1>Not Found</h1>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const description = e.target.description.value.trim();
        const icon = e.target.icon.value.trim();

        if (title && description && icon) {
            if (feature.title === title && feature.description === description && feature.icon === icon) {
                navigate("/dashboard/features");
            }

            dispatch(
                saveFeature({
                    id,
                    title,
                    description,
                    icon,
                })
            );

            navigate("/dashboard/features");
        }
    };

    return (
        <div className={classes.edit}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    name="title"
                    placeholder="Title"
                    defaultValue={feature.title}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    autoComplete="off"
                    defaultValue={feature.description}
                    required
                />
                <input
                    type="text"
                    name="icon"
                    placeholder="Icon"
                    autoComplete="off"
                    defaultValue={feature.icon}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default FeatureEdit;
