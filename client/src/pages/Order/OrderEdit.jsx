import { useParams, useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useEffect, useState } from "react";

export const OrderEdit = () => {
    useTitle("Order Edit");
    const { id } = useParams();
    const [ order, setOrder ] = useState({});
    const navigate = useNavigate();

    return <div>Order Edit Number: {id}</div>;
};
