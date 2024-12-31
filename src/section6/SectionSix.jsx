import React from 'react'
import './sectionsix.css'

const SectionSix = () => {
    const tokenomicsData = [
        { name: 'Liquidity', percentage: '30%' },
        { name: 'DEX', percentage: '20%' },
        { name: 'Presale', percentage: '25%' },
        { name: 'Marketing', percentage: '10%' },
        { name: 'Development', percentage: '10%' },
        { name: 'Reserve', percentage: '5%' }
    ];

    return (
        <div className='section-six'>
            <div className='section-six-content'>
                <div className='section-six-header'>
                    <span>Our Tokenomics</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestias! 
                    </p>
                </div>

                <div className='section-six-body'>
                    <div className='sec6_mini_card_container'>
                        {tokenomicsData.map((token, index) => (
                            <div className='sec6_mini_card' key={index}>
                                <span>{token.name}</span>
                                <p>{token.percentage}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSix
