import my from '../images/mypic.jpg';
export default function Aboutme()
{
    return(
        <div>
        <h1>Aboutme</h1>
        <img src={my} alt='pooja'width={50} height={50}></img>
        <dl>
       <dt>Name:</dt>
       <dd>Pooja</dd>
       <br></br>
       <dt>D.O.B</dt>
       <dd>10/08/2000</dd>
       <br></br>
       <dt>Gender</dt><dd>Female</dd>
       
       <br></br>
       <dd>Conatct</dd>
       <dt>7019550590</dt>
       <br></br>
       <dd>email</dd>
       <dt>poojaambiger1908@gmail.com</dt>
        </dl>
        <ul>
            <li>Name:Pooja</li>
        </ul>
        </div>
    );
}