import React from "react";
import CookieConsent from "react-cookie-consent";
import cookies from "../assets/docs/cookies_vivapolonia.pdf"

const Cookies = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Zgoda"
            cookieName="myAwesomeCookieName2"
            style={{ background: "rgba(43, 55, 59, 0.9)", width: "300px", height: "180px", borderRadius: "4px", right: "0", left: "auto", margin: "5px" }}
            buttonStyle={{ color: "#fff", background: "#fcb042", borderRadius: "4px", fontSize: "12px", padding: "5px 20px" }}
            expires={0}
            acceptOnScroll={true}
            acceptOnScrollPercentage={50}
            debug={true}
        >
            <p style={{ maxWidth: "230px", marginBottom: "0", fontSize: "12px" }}>Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się z{" "}
                <a href={cookies} target="blank" style={{ color: "#fff", textDecoration: "underline" }}>
                    polityką prywatności serwisu.
</a>
            </p>
        </CookieConsent >
    )


}

export default Cookies;

