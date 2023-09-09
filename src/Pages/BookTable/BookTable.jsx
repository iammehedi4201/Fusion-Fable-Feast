import React from 'react';
import './BookTable.css'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const BookTable = () => {
    return (
        <div className='flex gap-10 justify-between px-24'>
            <section className='w-1/2'>
                <img src="https://qichen-react.vercel.app/assets/images/contact/contact-1.jpg" alt="" />
            </section>
            <section className='w-1/2 px-12'>
                <SectionTitle
                    subHeading={"BOOKING TABLE"}
                    heading={"Make A Reservations"}
                ></SectionTitle>
                <p className='font-semibold pb-5'>Sit amet consectetur adipiscing elitsue risus mauris adipiscing phasellus aene ante orcirat</p>
                <form>
                    <div class="form_group">
                        <label><i className="far fa-user"></i></label>
                        <input type="text" className="form_control " placeholder="Person" name="person" />
                    </div>

                    <div class="form_group">
                        <label><i class="far fa-calendar-alt"></i></label>
                        <input type="date" class="form_control " id="datepicker" placeholder="Reserved Date" name="date" />
                        <div class="date-picker">
                        </div>
                    </div>

                    <div class="form_group">
                        <label for="select"><i class="far fa-clock"></i></label>
                        <select class="form_control " id="select" name="time">
                            <option data-display="Reservation Time">Reservation Time</option>
                            <option value="1">9.00 Am</option><option value="1">9.30 Am</option>
                            <option value="1">10.00 Am</option><option value="1">10.30 Am</option>
                            <option value="1">11.00 Am</option><option value="1">11.30 Am</option>
                            <option value="1">12.00 Pm</option><option value="1">12.30 Pm</option>
                            <option value="1">01.00 Pm</option><option value="1">01.30 Pm</option>
                            <option value="1">02.00 Pm</option><option value="1">02.30 Pm</option>
                            <option value="1">03.00 Pm</option><option value="1">03.30 Pm</option>
                            <option value="1">04.00 Pm</option><option value="1">04.30 Pm</option>
                            <option value="1">05.00 Pm</option><option value="1">05.30 Pm</option>
                            <option value="1">06.00 Pm</option><option value="1">06.30 Pm</option>
                            <option value="1">07.00 Pm</option><option value="1">07.30 Pm</option>
                            <option value="1">08.00 Pm</option><option value="1">08.30 Pm</option>
                            <option value="1">09.00 Pm</option><option value="1">09.30 Pm</option>
                            <option value="1">10.00 Pm</option>
                        </select>
                    </div>

                    <div class="form_group">
                    <button className='btn btn-outline  relative z-10 border-0 border-b-4 mt-5'>BOOK A TABLE</button>

                    </div>
                </form>
            </section>
        </div>
    );
};

export default BookTable;