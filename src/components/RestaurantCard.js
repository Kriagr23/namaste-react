import { MdStarRate } from "react-icons/md";
const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const {
        cloudinaryImageId,
        name,
        areaName,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = restaurantData?.info;
    return (
        <div className="restaurant-card">
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
                alt={name}
                className="restaurant-logo"
            />
            <div className="restaurant-details">
                <h3 className="restaurant-name">
                    {name.slice(0, 22)}
                    {name.length > 22 ? "..." : ""}
                    {/* //slice the name if it is too long and terminate with ... using ternary operator */}
                    <div className="esa-rating">
                        <h5 className="rating">
                            <MdStarRate className="rating-logo" />
                            <span>{avgRating}</span>
                        </h5>
                        <h5>{costForTwo}</h5>
                        <h5>{deliveryTime} Min</h5>
                    </div>
                    <p className="cousine">
                        {cuisines.join(", ").slice(0, 30)}
                        {cuisines.join(", ").length > 30 ? "..." : ""}
                    </p>
                    <p className="location">{areaName}</p>
                </h3>

            </div>
        </div>
    )
}
export default RestaurantCard;