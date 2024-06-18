
export default function Experience({exps}) {
    return (
        <div className='experience'>
            <h3 className='header'>Experience</h3>
            {exps.map(exp =>
                <>
                    <h4>{exp.jobTitle}</h4>
                    <p>Company: {exp.company}</p>
                    <p>Duration: {exp.duration}</p>
                </>
            )}
        </div>
    )
}