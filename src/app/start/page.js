import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import React from 'react';

const StartHerePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-slate-200 lg:flex lg:justify-evenly lg:-mx-20'>
                <Image className='mx-auto lg:mx-0' src="https://i.ibb.co/0cL9FzL/pexels-nicole-michalou-6061856.jpg" alt='Start here' width={500} height={100} />
                <div className='lg:w-1/2 my-10'>
                    <h2 className='text-5xl font-medium'>Welcome to RecipeNest</h2>
                    <h3 className='text-lg font-medium my-5'>LET’S TALK FOOD</h3>
                    <p className='text-lg text-slate-600 my-5'>And RecipeNest is my cozy corner of the internet where culinary dreams come true!</p>
                    <p className='text-lg text-slate-600 text-justify'>
                        Well, we hope that’s why you’re here. Our recipes are crafted for real, everyday life, focusing on wholesome ingredients and healthy meals (which, to us, can mean anything from a fresh salad to a decadent chocolate cake, because balance is key, right?). <br/>

                        RecipeNest started as a small passion project in [year], born out of a love for cooking and a desire to share delicious, approachable recipes with the world. Back then, I was [your previous occupation or activity], juggling a busy schedule but always finding joy and solace in the kitchen. What began as a personal blog, where I documented my culinary experiments and shared family-favorite recipes, quickly gained traction. <br/>

                        As more people discovered RecipeNest, the site evolved from a humble blog into a vibrant community of food enthusiasts. Our mission has always been simple: to make cooking fun, accessible, and rewarding for everyone. Over the years, we’ve expanded our collection to include everything from quick weeknight dinners and meal prep solutions to indulgent desserts and festive holiday feasts. <br/>

                        We pride ourselves on using real, everyday ingredients to create dishes that are not only delicious but also nourishing. Our philosophy is that healthy eating should be enjoyable and never feel like a chore. That’s why you’ll find a mix of wholesome salads, hearty casseroles, and yes, plenty of treats — because life’s too short not to enjoy a little sweetness. <br/>
                        This is the place to find those recipes — everything from our top-rated dishes to meal prep ideas, slow cooker favorites, or even creative ways to use up those odds and ends in your fridge. We aim to make cooking enjoyable and approachable, helping you discover the joy in preparing meals at home. <br/>

                        You’ve landed in the right spot! Explore, experiment, and enjoy. We hope you discover many recipes you’ll love and keep coming back for more. Thank you for being part of the RecipeNest community. Let’s cook up something amazing together!
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default StartHerePage;