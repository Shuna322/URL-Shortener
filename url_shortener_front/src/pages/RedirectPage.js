import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
// import './Redirect.css';
import RedirectElement from '../components/Redirect';
import RedirectLoadingComponent from '../components/RedirectLoading';

export const RedirectPage = () => {
    const { slug } = useParams();
    const RedirectLoading = RedirectLoadingComponent(RedirectElement);
    const [RedirectState, setRedirectState] = useState({
        loading: false,
        redirect: null,
    });

    useEffect(() => {
        async function fetch_data() {
            setRedirectState({ loading: true });
            const apiUrl = `http://127.0.0.1:8000/api/${slug}/`;
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setRedirectState({ loading: false, redirect: data });
            } catch (error) {
                const error_msg = `{
                    "error": "${error.message}"
                }`
                const error_data = JSON.parse(error_msg)
                console.error(error);
                setRedirectState({ loading: false, redirect: error_data});
            }
        }
        fetch_data();
    }, [slug, setRedirectState]);
    return (
        <div className="Redirect">
            <h1>Redirect data:</h1>
            <RedirectLoading isLoading={RedirectState.loading} redirect={RedirectState.redirect} />
        </div>
    );
};