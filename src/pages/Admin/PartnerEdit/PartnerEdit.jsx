import { useNavigate, useParams } from "react-router-dom";
import classes from "./PartnerEdit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectEditablePartner } from "../../../store/slices/partners/partnersSlice";
import { useEffect } from "react";
import { fetchPartner, savePartner } from "../../../store/slices/partners/partnersApi";

const PartnerEdit = () => {
    const { id } = useParams();
    const partner = useSelector(selectEditablePartner);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPartner(id));
    }, [id, dispatch]);

    if (!partner) {
        return <h1>Not Found</h1>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const website = e.target.website.value.trim();
        const logo = e.target.logo.value.trim();

        if (title && website && logo) {
            if (partner.title === title && partner.website === website && partner.logo === logo) {
                navigate("/dashboard/partners");
            }

            dispatch(
                savePartner({
                    id,
                    title,
                    website,
                    logo,
                })
            );

            navigate("/dashboard/partners");
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
                    defaultValue={partner.title}
                    required
                />
                <input
                    type="text"
                    name="website"
                    autoComplete="off"
                    placeholder="Website"
                    defaultValue={partner.website}
                    required
                />
                <input
                    type="text"
                    autoComplete="off"
                    name="logo"
                    placeholder="Logo link"
                    defaultValue={partner.logo}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default PartnerEdit;
