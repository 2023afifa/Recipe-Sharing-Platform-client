import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-slate-200 lg:flex lg:justify-evenly lg:-mx-20'>
                <Image className='mx-auto lg:mx-0' src="https://i.ibb.co/ckvYQt5/pexels-olia-danilevich-9004745.jpg" alt='About' width={500} height={100} />
                <div className='lg:w-1/2 my-10'>
                    <h2 className='text-5xl font-medium'>About Me</h2>
                    <h3 className='text-lg font-medium my-5'>HI, MY NAME IS SARA!</h3>
                    <p className='text-lg text-slate-600 my-5'>And RecipeNest is my cozy corner of the internet where culinary dreams come true!</p>
                    <p className='text-lg text-slate-600'>
                        I am the voice, author, and creator behind RecipeNest. What started as a casual hobby over 5 years ago in 2019 while I was student has now blossomed into a full-fledged business!! that reaches countless people with delightful recipes each month. Our content has been proudly featured on The Kitchn, CNN, Refinery29, Brit + Co, POPSUGAR, Huffington Post, The Everymom, PureWow, and more.

                        Cooking has always been my passion, and sharing this love with the world has been an incredible journey. I believe that food is not just about sustenance but a way to connect with loved ones, celebrate life, and explore different cultures. Each recipe on RecipeNest is crafted with care, aiming to bring joy and flavor to your kitchen.

                        I live in USA with my family members or pets. My favorite things in life include a heaping plate of spaghetti carbonara, bright sunny days, and exploring local farmers markets. When I am not in the kitchen experimenting with new recipes, you can find me enjoying the great outdoors, indulging in a good book, or spending quality time with friends and family.

                        RecipeNest is not just a collection of recipes; it is a community of food enthusiasts who believe in the magic of home-cooked meals. Whether you are a seasoned chef or a beginner, there is something here for everyone. From quick weeknight dinners to elaborate holiday feasts, every recipe is designed to be approachable, delicious, and fun to make.

                        Thank you for joining me on this culinary adventure. Let us make every meal a special occasion!
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;