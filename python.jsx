
import React from "react";

class Project extends React.Component
{
   render()
   {
    return(
        <div>
        <style color="blue"></style>
        <h1>Technical qiuze</h1>
        <button>JAVA</button>
        <button>PYTHON</button>
        <button>SQL</button>
        </div>
    )
   }
 
   java()
   {
    <Question>
   Q1.what is java?
   A.Object oriented programming
   B.Query programming
   C.Programming lanugage
   D.Non of the above
    </Question>

   }

   python()
   {

    <Question>
  Q1.How many functions are there in python?
  A.1
  B.4
  C.2
  D.5
    </Question>

   }

   sql()
   {
       <Question>
    Q1.SQL stands for?
    A. Structure query lanugage
    B. Standard query lanugage
    C. Non of the above
    D. Systeem query lanugage
    
       </Question>

   }
   
}