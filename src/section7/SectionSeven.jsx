import React, { useState } from 'react';
import './sectionseven.css';

const SectionSeven = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionItems = [
        {
            title: "I've never purchased an NFT before, tell me where to start?",
            content:
                "The first thing you should do is download MetaMask, a browser plugin that will act as your interface to the Ethereum Network. You'll also want some ETH, which can be purchased via a fiat on-ramp such as Coinbase or PayPal. From there, you'll send the ETH to your MetaMask address and will be able to use any DeFi service that connects to MetaMask!",
        },
        {
            title: 'How Many Dogs Will There Be?',
            content: 'There will be 88889 Dogs',
        },
        {
            title: 'What is NFT?',
            content: 'Non-fungible token.',
        },
        {
            title: "I'm worried about all the attention I will get with my Dogs!",
            content: 'Buckle in. Its only the beginning!!!.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="section7"  className='section_seven'>
           
            <div className="section_seven_container">
                <span className="chinese_tex6">FAQs</span>
            </div>

            <div className='sub_section_seven'>
            <div className='sub_section_seven_img_container'>
                <img src="./faq_img_doogie.png" alt="" />
            </div>

            <div className="accordion">
                {accordionItems.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <div
                            className="accordion-title"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            <span>{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div
                            className={`accordion-content ${
                                activeIndex === index ? 'show' : ''
                            }`}
                        >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default SectionSeven;
