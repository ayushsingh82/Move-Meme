pragma solidity 0.8.22;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract memecoin is ERC20,Ownable{
    uint public totalsupply;
    uint public rate ;
    string public description;
    constructor(string memory name,string memory symbol,string memory _description,address owner,uint _totalsupply,uint percentminttoowner)ERC20(name,symbol)Ownable(owner){
       _mint(owner,(_totalsupply*percentminttoowner)/100);
       totalsupply = _totalsupply;
       description=_description;
        rate=(_totalsupply*4)/100;
    }

    //Assume 1$fraxeth == 1000000$meme
    function setRate(uint _rate)public onlyOwner{
        rate = _rate*10**decimals();
    }
    
    // convert fraxeth to memecoin
    function convertFraxToMeme(uint amount)public view returns(uint) {
         uint memeamount= (amount*rate)/ 1 ether;
         return memeamount;
    }

     // convert fraxeth to memecoin
    function convertMemeToFrax(uint amount)public view returns(uint) {
         uint fraxamount = (amount * 1 ether)/rate;
         return fraxamount;
    }

     function buyPreSaleMeme(uint amount)public payable {
        require(amount <= (totalsupply*10)/100,"cant buy above 10 percent of total supply");
        require(totalSupply() <= totalsupply + amount,"cant buy anymore tokens ");
        require(msg.value >= convertMemeToFrax(amount),"not enough fraxeth");
        _mint(msg.sender,amount);
    }

    function addliquidity()public onlyOwner{

    }

    receive() external payable {
    
    }
   
}

contract memefactory{

      struct memeId{
        address memeAdrress;
        string  name;  
    }
    uint public counterId=1;
    mapping (uint=>memeId)public memeIdentifcation;
    event memedetail(string  name,string description,address owner,address memeaddress);

    function createMemecoin(string memory name,string memory symbol,string memory description,address owner,uint _totalsupply,uint percent)public{
          memeId storage _memeId =  memeIdentifcation[counterId];
          memecoin _memecoin =new memecoin(name,symbol,description,owner,_totalsupply,percent);
          _memeId.memeAdrress=address(_memecoin);
          _memeId.name=name;
          counterId++;
         emit  memedetail(name,description,owner,address(_memecoin));
    }
}


