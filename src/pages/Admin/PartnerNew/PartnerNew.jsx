import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPartner } from "../../../store/slices/partners/partnersApi";
import classes from "./PartnerNew.module.css";

const PartnerNew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value.trim();
        const website = e.target.website.value.trim();
        const logo = e.target.logo.value.trim();

        if (title && website && logo) {
            dispatch(
                addPartner({
                    title,
                    website,
                    logo,
                })
            );

            navigate("/dashboard/partners");
        }
    };

    return (
        <div className={classes.add}>
            <form onSubmit={handleSubmit}>
                <input type="text" autoComplete="off" name="title" placeholder="Title" required />
                <input type="text" name="website" autoComplete="off" placeholder="Website" required />
                <input type="text" autoComplete="off" name="logo" placeholder="Logo link" required />
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default PartnerNew;
