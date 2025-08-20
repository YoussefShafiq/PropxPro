import GetStarted from '../../Buttons/GetStarted'
import RequestDemo from '../../Buttons/RequestDemo'
import dashboardImg from '../../../assets/images/home/dashboard1.png'
import userFriendlyDashboard from '../../../assets/images/home/userFriendlyDashboard.png'
import LeadManagement12 from '../../../assets/images/home/LeadmanagementImg.png'
import communication from '../../../assets/images/home/communication.png'
import teamsChat from '../../../assets/images/home/teamsChat.png'
import phoneNumbers from '../../../assets/images/home/phoneNumbers.png'
import calling from '../../../assets/images/home/calling.png'
import effortlessOnboarding from '../../../assets/images/home/reset-password--interface-reset-password.png'
import easeManaging from '../../../assets/images/home/business-graph-positive.png'
import expertSupport from '../../../assets/images/home/interface-change-setting.png'
import empowerTeam from '../../../assets/images/home/empoweryrteamimg.png'
import actionAssign from '../../../assets/images/home/actionassignimg.png'
import agentimg from '../../../assets/images/home/user.png'
import Quoteimage from '../../../assets/images/home/Quoteimage.png'
import streamlineYourWorkflow from '../../../assets/images/home/streamline-yr-workflow-img.png'
import IntegrationsIcons from '../../../assets/images/home/Integrations-icons.png'
import { useAOSObserver } from '../../../hooks/useAOSObserver';
import DiscoverFeatures from '../ReusableSections/DiscoverFeatures'



export function HeroSection() {
    return <>
        <div className="container  lg:px-20 m-auto text-center flex flex-col gap-8 items-center py-8 lg:pt-28 lg:pb-16" >
            <h1 className='font-extrabold text-4xl leading-[133%] lg:text-7xl lg:w-[80%]'>Experience smart, fast, and user-friendly PropXPro CRM</h1>
            <p className='font-medium lg:text-2xl lg:w-[60%] text-grayText' >The game-changer sales system—expertly designed to simplify every step of your real estate success!</p>
            <GetStarted />
        </div>
        <div className="container m-auto" data-aos="fade-up" >
            <img src={dashboardImg} className='w-full' alt="user-friendly dashboard" />
        </div>
    </>
}

export function Userfriendly() {
    return <>
        <div className="container  flex lg:flex-row flex-col gap-5 w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:w-1/2 lg:pe-16">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">User-friendly dashboard</div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">View all your KPIs—track weekly, monthly, and yearly opportunities. Make practical, informed decisions that lead to confident, winning outcomes—let’s achieve success together!</div>
            </div>
            <div className="lg:w-1/2 rounded-xl">
                <img src={userFriendlyDashboard} alt="user-friendly dashboard" className='w-full' />
            </div>
        </div>
    </>
}

export function LeadManagement() {
    return <>
        <div className="container flex lg:flex-row flex-col gap-5  w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:w-1/2 lg:pe-16">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Lead management system</div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">All your leads in one place—PropXPro brings all your lead sources into one platform. Whether via round-robin, individual, or campaign-based strategies, managing and assigning becomes effortless with PropXPro.</div>
            </div>
            <div className="lg:w-1/2 rounded-xl">
                <img src={LeadManagement12} className='w-full' alt="user-friendly dashboard" />
            </div>
        </div>
    </>
}

export function RealTimeCommunication() {
    return <>
        <div className="container flex lg:flex-row flex-col gap-5  w-full items-center justify-between" data-aos="fade-up" data-aos-offset="200" >
            <div className="lg:w-1/2 lg:pe-16">
                <div className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Real time communication</div>
                <div className="lg:text-2xl text-grayText font-medium mt-6 leading-9">With our own integrated communication tool like PropXChat—You stay in constant touch with your team and clients, ensuring no opportunity slips through the cracks.</div>
            </div>
            <div className="lg:w-1/2  rounded-xl">
                <img src={communication} className='w-full' alt="user-friendly dashboard" />
            </div>
        </div>
    </>
}

export function ChatsAndCalling() {
    return <>
        <div className="container flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-3/5 bg-[#fefaf5] rounded-xl flex flex-col lg:pt-14 lg:pe-14 gap-10 overflow-hidden" >
                    <div className="p-5 lg:px-14">
                        <div className="text-3xl font-bold text-darkText ">Teams chat</div>
                        <div className="text-xl text-grayText font-medium mt-3 ">PropXPro Team chat enhances your productivity through streamlined communication and collaboration. Discover how easy growth can be—let's get started together!</div>
                    </div>
                    <div className="pe-10" data-aos="slide-right">
                        <img src={teamsChat} className='w-full' alt="teams chat" />
                    </div>
                </div>
                <div className="lg:w-2/5 bg-[#f6f5fe] rounded-xl flex flex-col lg:pt-14 gap-10 overflow-hidden"  >
                    <div className="p-5 lg:px-14 ">
                        <div className="text-3xl font-bold text-darkText ">Phone numbers</div>
                        <div className="text-xl text-grayText font-medium mt-3 ">Start simplifying your communications with a new work number—perfectly fit for all your business needs!</div>
                    </div>
                    <div className="ps-14" data-aos="slide-left">
                        <img src={phoneNumbers} className='w-full' alt="phone numbers" />
                    </div>
                </div>
            </div>

            <div className="bg-[#fef5f5] rounded-xl flex flex-col lg:pt-14 p-5 pb-0 lg:pb-0 lg:px-14 gap-10 overflow-hidden" >
                <div className="lg:w-5/6">
                    <div className="text-3xl font-bold text-darkText ">Calling and messaging</div>
                    <div className="text-xl text-grayText font-medium mt-3 ">Transform your team’s connectivity with PropXPro's advanced calls, group chats, real-time messaging with multimedia file-sharing and more—discover communication that truly connects!</div>
                </div>
                <div className="m-auto w-full" data-aos="slide-up" >
                    <img src={calling} className='w-full' alt="calling and messaging" />
                </div>
            </div>

        </div>
    </>
}

export function GettingStarted() {
    const items = [
        {
            id: 1,
            img: effortlessOnboarding,
            title: "Effortless Onboarding",
            description: "No onboarding hassle—We smoothly integrate your setup and get you connected with our super user-friendly system in no time! ."
        },
        {
            id: 2,
            img: easeManaging,
            title: "Start managing your team with ease",
            description: "With Propxpro super business friendly features—-Take control of your team's success and start closing more deals with confidence and ease!"
        },
        {
            id: 3,
            img: expertSupport,
            title: "Get Expert Support",
            description: "With PropXPro Expert Support, you're never alone! Connect instantly for Expert help and confidently close more deals!"
        }
    ]
    return <>
        <div className="bg-[#131e57] ">
            <div className="container flex flex-col gap-10 items-center" data-aos="fade-up" data-aos-offset="200">
                <div className="text-center text-2xl lg:text-5xl leading-[133%] font-extrabold text-white">Getting started with PropXPro</div>
                <div className="flex flex-col lg:flex-row gap-5">
                    {
                        items.map((i) => (
                            <div key={i.id} className="w-full lg:w-1/3 bg-[#1d2861] rounded-2xl p-5 pb-12 flex flex-col" data-aos="fade-up" data-aos-offset="200" data-aos-delay={i.id * 100} >
                                <div className="w-20">
                                    <img src={i.img} className='w-full' alt={i.title} />
                                </div>
                                <div className="text-xl text-white font-bold mt-5">{i.title}</div>
                                <div className="text-base text-white font-medium mt-2">{i.description}</div>
                            </div>
                        ))
                    }
                </div>
                <GetStarted />
            </div>
        </div>
    </>
}

export function EmpowerYourTeamAndActionAssignment() {
    return <>
        <div className="container flex lg:flex-row flex-col gap-10">
            <div className="w-full lg:w-3/5 bg-[#f6f5fe] rounded-xl flex flex-col lg:pt-14  gap-10 overflow-hidden"   >
                <div className="p-5 lg:px-14">
                    <div className="text-3xl font-bold text-darkText ">Empower your team</div>
                    <div className="text-xl text-grayText font-medium mt-3 ">Assign roles from admins to agents, and track performance with ease—Creating a dynamic and collaborative space for your real estate Excellence.</div>
                </div>
                <div className="lg:pe-14 h-full" data-aos="slide-right">
                    <img src={empowerTeam} className='h-full' alt="teams chat" />
                </div>
            </div>
            <div className="w-full lg:w-2/5 bg-[#fefaf5] rounded-xl flex flex-col lg:pt-14  gap-10 overflow-hidden"   >
                <div className="p-5 lg:px-14 ">
                    <div className="text-3xl font-bold text-darkText ">Action assignment</div>
                    <div className="text-xl text-grayText font-medium mt-3 ">Assign tasks based on expertise—PropXPro's smart round-robin system ensures balanced workloads. </div>
                </div>
                <div className="ps-14 h-full" data-aos="slide-left">
                    <img src={actionAssign} className='h-full' alt="phone numbers" />
                </div>
            </div>
        </div>
    </>
}

export function StreamlineYourWorkflow() {
    return <>
        <div className="bg-[#f5f9fe]">
            <div className="container !pb-0 mb-0 flex flex-col lg:flex-row gap-10  justify-between items-end">
                <div className="w-full lg:w-1/2 lg:max-w-1/2 flex flex-col justify-center gap-10 h-full self-stretch">
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-darkText leading-[133%]">Streamline your workflow</h2>
                    <p className="lg:text-2xl text-darkText font-medium leading-9">
                        Integrate PropXPro with ease—sync contacts, track conversations, and analyze calls—all in one place. Ready to upgrade?
                    </p>
                    <button className="bg-lightBlue text-white h-[56px] lg:w-[182px] rounded-lg text-xl font-semibold">
                        Learn more
                    </button>
                </div>
                <div className="w-fit lg:w-2/5 lg:min-w-[500px] flex overflow-hidden relative h-full items-end m-auto">
                    <img src={IntegrationsIcons} className="w-32 lg:w-48 absolute top-0 z-10" alt="phone numbers" />
                    <img src={streamlineYourWorkflow} className="w-48 lg:w-72 ms-28 lg:ms-44" alt="phone numbers" data-aos="slide-up" />
                </div>
            </div>
        </div>
    </>
}

export function SimplifyChallenges() {
    return <>
        <div className="bg-[#131e57] py-10">
            <div className="container flex flex-col gap-10 items-center">
                <div className="text-center text-2xl lg:text-5xl leading-[133%] font-extrabold text-white">Simplify your real estate challenges</div>
                <div className="text-center lg:text-2xl leading-9 font-medium text-white text-opacity-80 lg:px-56">Discover the ease of turning leads into victories with PropXPro. Each click on our platform is a step closer to your next big win in real estate!</div>
                <RequestDemo />
            </div>
        </div>
    </>
}

export function AgentFeedback() {
    return <>
        <div className=" bg-[#f5f9fe]">
            <div className="container flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-4/5">
                    <p className='text-xl lg:text-4xl font-extrabold leading-9 lg:leading-[50px] text-darkText' >“ Using PropXPro CRM  has been a game-changer for our business. It has streamlined our processes, making it easy to track sales and manage leads. The intuitive interface and robust features have significantly improved our efficiency ”</p>
                </div>
                <div className="lg:w-80 flex flex-col justify-center">
                    <div className="relative flex items-center justify-center w-72 h-72 ">
                        <img src={agentimg} className='w-52' alt="user-friendly dashboard" />
                        <img src={Quoteimage} className='w-24 absolute top-0 right-0' alt="user-friendly dashboard" data-aos="zoom-in" />
                    </div>
                    <div className="text-center">
                        <h2 className='text-2xl font-bold'>David Thompson</h2>
                        <p className='font-medium'>Real estate agent</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export function InvestmentIntoSuccess() {
    return <>
        <div className="bg-[#131e57] py-10">
            <div className="container flex flex-col gap-10 items-center" >
                <div className="text-center text-2xl lg:text-5xl leading-[133%] font-extrabold text-white lg:px-44">Transform your real estate investments into success stories</div>
                <div className="text-center lg:text-2xl leading-9 font-medium text-white text-opacity-80 lg:px-72">Sign up and explore PropXPro  – Your journey towards confident deal-making begins here!</div>
                <GetStarted />
            </div>
        </div>
    </>
}

export default function Home() {
    useAOSObserver();
    return <>
        <HeroSection />
        <div className="py-8 lg:py-28 space-y-4 px-6" data-aos="fade-up" data-aos-offset="200">
            <div className="lg:text-3xl font-medium text-center text-grayText leading-9">Explore performance metric at a glance</div>
            <div className="text-4xl lg:text-7xl text-darkText text-center font-extrabold leading-[115%]">Close deals with ease & confidence</div>
        </div>
        <Userfriendly />
        <LeadManagement />
        <RealTimeCommunication />
        <ChatsAndCalling />
        <GettingStarted />
        <div className="p-10 py-20 pb-10 lg:p-28 lg:px-48 space-y-4" data-aos="fade-up" data-aos-offset="200">
            <div className="text-2xl lg:text-5xl text-darkText text-center font-extrabold leading-[115%]">Simplify every step of your real estate success with PropXPro</div>
        </div>
        <EmpowerYourTeamAndActionAssignment />
        <StreamlineYourWorkflow />
        <SimplifyChallenges />
        <AgentFeedback />
        <DiscoverFeatures />
        <InvestmentIntoSuccess />
    </>
}
