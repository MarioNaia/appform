import React, { useState } from 'react';
import { Form, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FileDropzone from '../components/FileDropzone';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register, motto} from '../constants/strings';


const FormPage = () => {



    const infoTooltipDOB = (
        <Tooltip id="info-tooltip">
            Please select your date of birth.
        </Tooltip>
    );
    const infoTooltipGender = (
        <Tooltip id="info-tooltip">
            Please select your gender.
        </Tooltip>
    );


    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [daysInMonth, setDaysInMonth] = useState(31);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email_mobile: '',
    });

    const resetData = () => {
        setForm({
            first_name: '',
            last_name: '',
            email_mobile: '',
        });
        setSelectedDay("");
        setSelectedMonth("");
        setSelectedYear("");
        setSelectedGender("");
    }

    
    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
      };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submitButton = (e) => {
        e.preventDefault();
        console.log(form);
        console.log(selectedDay);
        console.log(selectedYear);
        console.log(selectedMonth);
        console.log(selectedGender);
        resetData()
    }

    const renderDayOptions = () => {
        const options = [];
        for (let day = 1; day <= daysInMonth; day++) {
          options.push(<option value={day} key={day}>{day}</option>);
        }
        return options;
      };
    
      const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        updateDaysInMonth(event.target.value, selectedYear);
      };
    
      const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        updateDaysInMonth(selectedMonth, event.target.value);
      };
    
      const handleGenderMale = (event) => {
        setSelectedGender(false);
      };

      const handleGenderFemale = (event) => {
        setSelectedGender(true);
      };

    const updateDaysInMonth = (month, year) => {
        const selectedDate = new Date(year, month - 1, 1);
        const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
        setDaysInMonth(lastDayOfMonth);
      };

      const renderYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const options = [];
        for (let year = currentYear; year >= 1900; year--) {
          options.push(<option value={year} key={year}>{year}</option>);
        }
        return options;
      };

    return (
        <form className="form-container">


            <div className="text-center mb-4">
                <h2 className="form-title">{register}</h2>
                <h5 className="form-subtitle">{motto}</h5>
            </div>
            <hr className="subtitle-line" />

            <Row className="mb-3">
                <Form.Group controlId="formBasicFirstName" className="col col-sm-6">
                    <Form.Control placeholder="Prénom" type="name" name="first_name" value={form.first_name} onChange={handleChange} className="form-control" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName" className="col col-sm-6">
                    <Form.Control placeholder="Nom de familie" type="name" name="last_name" value={form.last_name} onChange={handleChange} className="form-control" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group className=" col col-sm-12" controlId="formGridEmail">
                    <Form.Control placeholder="Numéro de mobile ou e-mail" className="form-control" type={"mobile" || "email"} name="email_mobile" value={form.email_mobile} onChange={handleChange} />
                </Form.Group>
            </Row>

            <Form>
                <Form.Group className="col mt-3 form-label label-left">
                    <Form.Label>
                        Date de naissance
                        <OverlayTrigger placement="right" overlay={infoTooltipDOB}>
                            <span className="ml-1 text-primary">&#9432;</span>
                        </OverlayTrigger>
                    </Form.Label>
                    
                    <div className="d-flex">
                        <Form.Control as="select" className="mr-2" value={selectedMonth} onChange={handleMonthChange}>
                            <option value="">Mois</option>
                            <option value="1">janvier</option>
                            <option value="2">février</option>
                            <option value="3">mars</option>
                            <option value="4">avril</option>
                            <option value="5">mai</option>
                            <option value="6">juin</option>
                            <option value="7">juillet</option>
                            <option value="8">août</option>
                            <option value="9">septembre</option>
                            <option value="10">octobre</option>
                            <option value="11">novembre</option>
                            <option value="12">décembre</option>
                        </Form.Control>
                        <Form.Control as="select" className="mr-2" value={selectedYear} onChange={handleYearChange}>
                            <option value="">Année</option>
                            {renderYearOptions()}
                        </Form.Control>
                        <Form.Control as="select"  value={selectedDay} onChange={handleDayChange}>
                            <option value="">Jour</option>
                            {renderDayOptions()}
                        </Form.Control>
                    </div>
                </Form.Group>



                
                <Form>
                    <Form.Group className="col mt-3 form-label label-left">
                        <Form.Label className="form-label label-left">
                            Genre
                            <OverlayTrigger placement="right" overlay={infoTooltipGender}>
                                <span className="ml-1 text-primary">&#9432;</span>
                            </OverlayTrigger>
                        </Form.Label>
                        <div className="d-flex justify-content-left ">
                            <Form.Check
                                type="radio"
                                id="femaleRadio"
                                label="Femme"
                                name="genderRadio"
                                value="female"
                                checked={form.gender === 'female'}
                                onChange={handleGenderFemale}
                                className="custom-radio-button me-3"
                            />

                            <Form.Check
                                type="radio"
                                id="maleRadio"
                                label="Homme"
                                name="genderRadio"
                                value="male"
                                checked={form.gender === 'male'}
                                className="custom-radio-button"
                                onChange={handleGenderMale}
                            />
                        </div>
                    </Form.Group>
                </Form>
            </Form>
            <Form.Text>Photo?</Form.Text>
            <FileDropzone />
            <Row className="mb-3">
                <Form.Group controlId="formGridCheckbox" className="d-flex justify-content-center mt-3">
                    <button type="submit" onClick={submitButton} className="me-4 btn btn-success btn-lg btn-block justify-content-center" >{register}</button>
                </Form.Group>
            </Row>


            <Form.Text>En cliquant sur S'inscrire, vous acceptez nos <a href="https://www.example.com">Conditions générales</a>. Découvrez comment nous recueillons, utilisons et partageons vos données en lisant notre <a href="https://www.example.com">Politique de confidialité</a> et comment nous utilisons les cookies et autres techonologies similiaires en consultant notre <a href="https://www.example.com">Politique d'utilisation des cookies</a>. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner</Form.Text>

        </form>
    );
};

export default FormPage;