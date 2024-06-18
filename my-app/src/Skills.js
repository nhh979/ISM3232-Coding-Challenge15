
export default function Skills({skills}) {
    return (
        <div className='skills'>
            <h3 className='header'>Skills</h3>
            <ul>
                {
                    skills.map(skill => 
                        <li>{`${skill.name} (${skill.level})`} </li>
                    )
                }
            </ul>
        </div>
    )
}