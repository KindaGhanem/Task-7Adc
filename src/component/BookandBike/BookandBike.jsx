
'use client'

import Image from 'next/image'
import './BookandBike.css'
import ButtonCommon from '../ButtonCommon/ButtonCommon'
import MainTitle from '../MainTitle/MainTitle'
import { useState } from 'react'

export default function BookandBike({ titleBook, labelname, holdername, labelnumber, holdernumber, labeldate, holderdate, labelemail, holderemail, labelservice, holderservice, labeltime, holdertime, btnSign, bikeImg, bikealt }) {
    const [dateType, setDateType] = useState('text'); // حالة لتتبع نوع الإدخال
    const [timeType, setTimeType] = useState('text'); // حالة لتتبع نوع الإدخال

    return (
        <section className='BookSec padding-main'>
            <div className='LeftBookSec'>
                <MainTitle maintitle={titleBook} auto='auto' />
                <form className='FormBookSec'>
                    <div className='Formflex'>
                        <div>
                            <label>{labelname}</label>
                            <input type='text' placeholder={holdername} />
                            <label>{labelnumber}</label>
                            <input type='number' placeholder={holdernumber} />
                            <label>{labeldate}</label>
                            <input type={dateType}  placeholder={holderdate}  onFocus={() => { setDateType('time'); }} onBlur={(e) => { if (!e.target.value) { setDateType('text'); } }} 
                            />
                        </div>
                        <div>
                            <label>{labelemail}</label>
                            <input type='email' placeholder={holderemail} />
                            <label>{labelservice}</label>
                            <input type='text' placeholder={holderservice} />
                            <label>{labeltime}</label>
                            <input type={timeType} placeholder={holdertime} onFocus={() => { setTimeType('time'); }} onBlur={(e) => { if (!e.target.value) { setTimeType('text'); } }} 
                            />
                        </div>
                    </div>
                    <ButtonCommon btnSign={btnSign} contact='contact' />
                </form>
            </div>
            <Image src={bikeImg} alt={bikealt} className='imageBike' />
        </section>
    )
}
