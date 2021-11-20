import MobileMarketing from '../assets/MobileMarketing.mp4'
export function MarketingPlan() {
    return (
        <div>
            <h1 className="py-2 text-2xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="text-blue-800 block xl:inline">MARKETING PLAN</span> <br />
            </h1>
            <div className="flex flex-col-reverse lg:flex-row sm:px-4">
                <div className="w-full lg:w-1/2 text-sm text-justify p-6 rounded-lg lg:ml-4 bg-blue-700 text-gray-100">
                    <h1 className="font-extrabold">
                        Our Objetives:
                    </h1>
                    <p>
                        Target a specific audience and get to know the place. This objective will start 3 months before the opening of the HOTELand will go on as long as the company is working. The budget required goes around $30,000 taking in consideration the team of social media that will take care of the website, instagram and facebook accounts; in addition, the online ads and the photography work.
                    </p>
                    <p>
                        Since social media is the biggest way to promote your business, it can also work to increase the network. Hence, we believe this is the most effective way to make people of the area know about Stronger. Furthermore, our primary target to attract to the business, millennials and centennials, use social media such as instagram at really high rates.

                    </p>
                    <hr className="my-4" />
                    <h1 className="font-extrabold">
                        Action Plan:
                    </h1>
                    <p>
                        The plan will be executed by a hired team of social media, all supervised by the Owner/ CEO of the company. The team will be formed by two specialists. The first is an expert in Facebook and instagram strategies, that will be aware of the algorithm and its recurrent changes. The second will be a professional  photographer, with a specialization in food and establishment   photography. Both skillful professionals will be the responsibles to manage the social media accounts.

                    </p>
                    <p>
                        By the use of social media, the team will not only promote the values  and concept of the company but also advertise the events that will eventually occur, besides the opening events. These events will be explained in other objectives.

                    </p>
                    <p>
                        Google ads will be used since it has shown very good results in other businesses. According to this statistics each click provides 2$ for the business and 1$ for google. It reaches about 2 billion users and automatically locates the ad of your business in websites related to your business. This is called “smart programer”. It works by specifying your business putting it into categories, so the programmer will locate it in websites with similar categories or targets.

                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <a title="Agradecimientos a StorySet" href="https://storyset.com/business">
                        <video className="sm:mx-auto -mt-12 lg:mt-12 w-2/3 lg:w-2/3" src={MobileMarketing} autoPlay="true" loop="true"></video>
                    </a>
                </div>
            </div>
            <div className="text-sm mx-4 lg:mx-24 border-4 border-blue-800 rounded-lg my-6 p-6">
                <h1 className="font-extrabold">
                    The micro - influencer programs

                </h1>
                <p>
                    It is expected to Increase Sales and target market by Collaborating with influencers to spread brand awareness and to attract new customers.  Micro-influencers are people who have already built the audience a brand looking for, and they’ve already established trust with them. Influencers have established relationships with their followers through their stories. And when they’re willing to share a brand’s story, their followers are ready and willing to listen. When you consider that 40% of Twitter users have made a purchase as a direct result of a tweet from an influencer, it’s easy to see why many brands use influencers to spread their message. Micro-influencers are accessible to businesses of all shapes and sizes. When a brand doesn’t have the budget to work with a celebrity, it can still get the benefit of working with influencers and watch the brand grow on social media. Also it is shown that having a smaller amount of followers, such as 50k, it is more effective when it comes to branding. Basically, this means that smaller audiences are more loyal to recommendations, besides being a more profitable option to the business.


                </p>
                <p>
                    Natalia Coronado attendant of Stronger will take care of making contact with the influencers. They will be offered dinner for two 3 times a month in one of our subsidiaries, and be paid around $350. That includes one instagram per dinner and instagrams stories, one tweet and one Facebook Post. For instance, If twoo influencers are contacted in a year based contract can cost $8,400.


                </p>
            </div>
        </div>
    )
}