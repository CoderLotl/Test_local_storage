document.addEventListener("DOMContentLoaded", () =>
{
    const enter = document.getElementById('enter');
    const retrieve = document.getElementById('retrieve');

    enter.addEventListener('click', EnterData);
    retrieve.addEventListener('click', RetrieveData);
});

function EnterData()
{
    const text = document.getElementById('text');
    
    localStorage.setItem('testData', text.value);    
}

function RetrieveData()
{
    const textArea = document.getElementById('text-area');
    const text = localStorage.getItem('testData');

    let shard = document.createElement('p');
    shard.textContent = text;
    textArea.appendChild(shard);
}