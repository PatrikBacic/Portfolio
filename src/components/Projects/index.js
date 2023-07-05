import "./index.scss";
import categoryImage from "../../assets/images/category.png";
import transactionImage from "../../assets/images/transaction.png";
import dcImage from "../../assets/images/digitalclock.png";
import swImage from "../../assets/images/stopwatch.png";
 
export default function Projects() {
    return(
        <div className="projects-container">
            <h1 className="projects-title">
                My projects
            </h1>
            <div className="projects-content">
                <h2 className="eapp-title">ExpensesApp</h2>
                <p className="eapp-text">
                    An ASP.NET MVC app that lets the user create custom categories
                    and transactions, this app helps with managing the user's income
                    and expenses. On the category page, the user can edit, delete or
                    see the details for each category and create new ones. While
                    creating a new category the user has an option to specify if the
                    category is going to be an expense or income. After the user created
                    a couple categories he can start adding some transactions on the 
                    transaction page. The income is displayed with the color green
                    and expenses are displayed with the color red, underneath all of
                    the current transactions there is a sum for the current total income,
                    expenses and balance. This app also has a register and login feature and
                    it was made in Visual Studio 2019, controllers and views were made with entity framework.
                    Click the following link to navigate to the project on <a className="gh-link1" href="https://github.com/PatrikBacic/ExpensesApp">Github</a>.
                </p>
                <div className="project-img">
                    <img src={categoryImage} alt="category" /> <img src={transactionImage} alt="transaction" />
                </div>

                <h2 className="dc-title">Digital Clock</h2>
                <p className="dc-text">
                    A windows forms app that displays the current date and time in five different time zones.
                    The time zones are located inside of a listbox and when selected, they shift from the 
                    default "Central European Time" time zone to the selected one. The app also has the option
                    to switch between dark and bright themes. The digital clock functions by utilizing the timer
                    component, while the time of the currently selected time zone is being changed every second
                    by the timer's ticking function, the time zones that are not selected are also changing their
                    time each passing second in the "background".
                    Click the following link to navigate to the project on <a className="gh-link2" href="https://github.com/PatrikBacic/DigitalClock">Github</a>.
                </p>
                <div className="project-img">
                    <img src={dcImage} alt="digital clock"/>
                </div>

                <h2 className="sw-title">Stopwatch</h2>
                <p className="sw-text">
                    A Java app that replicates a simple stopwatch. When the start button is pressed
                    the time starts ticking, when the user clicks the stop button the time freezes
                    until the user doesn't click on the same button again. The reset button simply
                    resets the time back to zero.
                    Click the following link to navigate to the project on <a className="gh-link3" href="https://github.com/PatrikBacic/Stopwatch">Github</a>.
                </p>
                <div className="project-img">
                    <img src={swImage} alt="stopwatch" />
                </div>
            </div>
        </div>
    )
}