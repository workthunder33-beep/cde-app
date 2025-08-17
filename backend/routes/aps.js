// Wire Autodesk APIs here in Phase 2 (OAuth, Data Management, OSS, Model Derivative)
export const test=(req,res)=>{
    try {
        res.status(200).json({ message: "Test successful" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
console.log("Test endpoint hit");
