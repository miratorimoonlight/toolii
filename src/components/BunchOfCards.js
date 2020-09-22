import React from 'react';
import CardMenu from './CardMenu';

const BunchOfCards = () => {
    return (
       <div>
            <CardMenu 
                title="Calculator" 
                text="A simple calculator that can help you with your daily calculation!" 
                icon="calculator"
                link="/calculator"
            />
            <CardMenu 
                title="Mark Down Previewer" 
                text="Wanna see how your mark down look like, preview it with this tool that I made here!"
                icon="code"
                link="/mdpreviewer"
            />
            <CardMenu 
                title="About Me" 
                text="Check out my little biography!"
                icon="user"
                link="/aboutme"
            />
       </div>
    )
}

export default BunchOfCards