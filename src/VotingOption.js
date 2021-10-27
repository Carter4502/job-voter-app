import './VotingOption.css';

const VotingOption = ({image, company, position, salary}) => {
    return (
        <div className = "card">
        <div id="container">
        <span className="helper"></span>
        <img alt="company logo" src={image} />
        </div>
        <h1 className = "jobCompany">{company}</h1>
        <h1 className = "jobTitle">{position}</h1>
        <h3 className = "jobSalary">${salary}/hr</h3>
        </div>
    )
}
export default VotingOption