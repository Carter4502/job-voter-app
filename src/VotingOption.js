import './VotingOption.css';
const VotingOption = ({text}) => {
    return (
        <a href="https://www.google.com">
        <div class = "card">
        <h1 class="jobTitle">{text}</h1>
        </div>
        </a>
    )
}
export default VotingOption