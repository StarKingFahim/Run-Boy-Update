class Boy extends Character
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.animation = loadAnimation("boy/Run (1).png", "boy/Run (2).png"
        , "boy/Run (3).png","boy/Run (4).png","boy/Run (5).png","boy/Run (6).png"
        ,"boy/Run (7).png","boy/Run (8).png","boy/Run (9).png","boy/Run (10).png"
        ,"boy/Run (11).png","boy/Run (12).png","boy/Run (13).png","boy/Run (14).png"
        ,"boy/Run (15).png");
    }
}