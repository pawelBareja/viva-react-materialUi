import React, { Component } from "react";
import "../assets/css/scrollToTop.css";
import { FiChevronUp } from "react-icons/fi";

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function (e) {
            scrollComponent.toggleVisibility();
        });
    }

    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        const { is_visible } = this.state;
        return (
            <div className="scroll-to-top">
                {is_visible && (
                    <div onClick={() => this.scrollToTop()}>
                        <div className="scroll__container">
                            <p className="arrow">
                                <FiChevronUp />
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
