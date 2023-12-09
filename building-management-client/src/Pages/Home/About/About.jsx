import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Title from '../../../Components/Title/Title';

const About = () => {
    return (
        <div>
            <Title title='About The Building'></Title>
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide>
                    <div className="slide-content mx-40">
                        <h2 className='text-center mb-4 text-2xl font-bold'>Discover Our Iconic Building</h2>
                        <p>Welcome here, an architectural masterpiece that stands as a testament to modern design and functionality. Our building embodies innovation, offering a harmonious blend of luxury, sustainability, and technological advancement. Explore the stunning architecture, state-of-the-art facilities, and breathtaking views that make [Building Name] a symbol of sophistication and excellence. From its eco-friendly features to its meticulously crafted interiors, each aspect of this structure has been carefully curated to provide a seamless experience for residents, tenants, and visitors alike. Join us on a journey through elegance and efficiency, where every corner tells a story of elegance and contemporary living.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content mx-40">
                        <h2 className='text-center mb-4 text-2xl font-bold'>Exceptional Facilities for Unmatched Comfort</h2>
                        <p>Here we pride ourselves on offering an unparalleled range of facilities designed to elevate your living or working experience. Our commitment to providing utmost comfort and convenience is reflected in the diverse array of amenities available within our premises. Whether you're a resident, employee, or guest, you'll find an impressive selection of facilities tailored to cater to your needs.

                            Indulge in the ultimate relaxation at our spa and wellness center, where you can rejuvenate your senses after a long day. Stay active and energized in our state-of-the-art fitness center equipped with top-notch equipment and personalized training programs.

                            For those seeking leisure and social activities, our recreational areas offer a variety of options, from a stunning rooftop garden with panoramic views to a vibrant community lounge perfect for gatherings and events.

                            We prioritize safety and security, ensuring peace of mind for all occupants with 24/7 surveillance, controlled access points, and a dedicated team ready to assist at any moment.

                            Discover a seamless blend of luxury and practicality with our meticulously curated facilities, setting a new standard in modern living and working environments.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default About;
