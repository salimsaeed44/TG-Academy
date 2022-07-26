import React from 'react'
import './School.css'
import { ReactComponent as Logo} from "./images/LOGO.svg"
import { ReactComponent as Image} from "./images/person.svg"
import { ReactComponent as GoogleStore} from "./images/google store.svg"
import { ReactComponent as AppStore} from "./images/app store.svg"
import { ReactComponent as Facebook} from "./images/facebook.svg"
import { ReactComponent as Linkedin} from "./images/linkedin.svg"
import { ReactComponent as Telegram} from "./images/telegram.svg"

const School = () => {
    let tabs = document.querySelectorAll(".ul li")
    let tabsArray = Array.from(tabs)
    // console.log(tabArray)
    tabsArray.forEach((ele) => {
        ele.addEventListener("click", function (e) {
            tabsArray.forEach((ele) => {
                ele.classList.remove("active")
            })
            e.currentTarget.classList.add("active")
        })
    })
  return (
    <div className='background'>
            {/* Start Header */}
        <div className="header">
            <div className="container">
                <div className="parent">
                    <div className="btn">
                        <button>انضـم لنا</button>
                    </div>
                    <div className="select">
                        <select name="اللغة" id="">
                            <option value="">English</option>
                            <option value="">العربية</option>
                            <option value="">French</option>
                        </select>
                    </div>
                    <div className="lists">
                        <ul className='ul'>
                            <li><a >فريقنــا</a></li>
                            <li><a >أعمالنــا</a></li>
                            <li><a >المسـارات</a></li>
                            <li><a >مـاذا نقـدم</a></li>
                            <li><a >مــن نحـــن</a></li>
                            <li className='active'><a >الصفحـة الرئيســية</a></li>
                        </ul>
                    </div>
                    <div className="logo">
                        <Logo className='logo'/>
                    </div>
                </div>
            </div>
            {/* End Header */}
            {/* Start Section */}
            <section>
                <div className="container">
                    <div className="bg-map">

                    </div>
                    <div className="content">
                        <div className="title">
                            <h2>تعــلم تخصــص</h2>
                            <h2>بمستوى جامعـــــــــي</h2>
                            <h2>متـــاح للجميـــع بالمجــــــــان</h2>
                        </div>
                        <div className="image">
                            <Image  className='image'/>
                        </div>
                    </div>
                    <div className="store">
                        <div className="app">
                        <AppStore className='icon1'/>
                        </div>
                        <div className="google">
                        <GoogleStore className='icon'/>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section */}
            {/* Start Footer */}
            <footer>
                <div className="container">
                    <div className="icon-store">
                        <div className="text">
                            <p>© 2022 TG Academy</p>
                            <p>سياســــة الخصوصيـــة</p>
                        </div>
                        <div className="icons">
                            <Facebook className='icon'/>
                            <Linkedin className='icon'/>
                            <Telegram className='icon'/>
                            <p>تواصـل معنـا</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    </div>
    )
}
export default School;