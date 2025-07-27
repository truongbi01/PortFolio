import { AnimatedTestimonials } from "../Tests/Animated/animated-testimonials.jsx";

export function MoreAboutMe() {
    const testimonials = [
        {
            name: "Volleyball passion",
            quote: "Volleyball is not just a sport; it's also a way for me to expand relationships, cultivate teamwork, and an indispensable part of my daily life",
            description:
                "Though unique, this sport is a part of me; it's the foundation of my health and teamwork, as well as a way to connect with friends.",
            src: "https://images.unsplash.com/photo-1521138054413-5a47d349b7af?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Technophile",
            quote: "To a true technophile, every new gadget is a promise, and every line of code, a story",
            description:
                "A technophile is an enthusiast who embraces and deeply engages with new technologies, constantly seeking innovation",
            src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Film enthusiast",
            quote: "For the film enthusiast, every movie is a journey, and every frame, a story waiting to be discovered.",
            description:
                "A film enthusiast is someone deeply passionate about cinema, appreciating the art, storytelling, and immersive experience of movies.",
            src: "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            name: "Patriot",
            quote: "For me, my homeland is an integral part of my life. As a patriot, I am prepared to dedicate my all and leverage advanced technologies to make a global impact",
            description:
                "Driven by this profound connection, I am committed to continuous innovation, aiming to build solutions that transcend borders and foster a brighter future for all.",
            src: "https://i.ytimg.com/vi/eSitLMvr5XQ/maxresdefault.jpg",
        },
        {
            name: "Embrace lifelong learning.",
            quote: "I actively seek to continuously acquire new knowledge, reinforce existing understanding, and learn from my peer, all in pursuit of becoming a better version of myself.",
            description:
                "This dedication to continuous growth ensures I remain adaptable, innovative, and highly effective in a rapidly evolving professional landscape.",
            src: "https://plus.unsplash.com/premium_photo-1683887033901-d6142b2f1a18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhcm5pbmclMjBoYXJkfGVufDB8fDB8fHww",
        },
        {
            name: "Education and Achievements",
            quote: "Education is fundamental to personal development, though I confess I overlooked its importance in my early years. Nevertheless, I have since made significant efforts to improve my performance, and I am proud to say I have succeeded.",
            description:
                "I am a proud graduate of HUFLIT University of Foreign Languages and Information Technology, having previously attended a specialized high school with a strong focus on Computer Science. While my initial university GPA was 2.7/4, I consistently improved, achieving a 3.5/4 in my final year. This upward trend in my academic performance is a significant source of satisfaction for me.",
            src: "https://universityofhanoi.com/wp-content/uploads/2025/06/truong-huflit.webp",
        }
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
