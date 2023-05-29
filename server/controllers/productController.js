const { createError } = require("../utils/error");
const Product = require('../models/Product');

exports.productList = async (req,res,next)=>{
    try{
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKey;
        const skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue!=="0") {
            let SearchRgx = {"$regex": searchValue, "$options": "i"}
            let SearchQuery = {$or: [{title: SearchRgx}, {brand: SearchRgx}, {category: SearchRgx}]}

            data = await Product.aggregate([
                {
                    $facet:{
                        Total: [{$match: SearchQuery}, {$count: 'total'}],
                        Row: [{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}]
                    }
                }
            ])
        } else {
            data = await Product.aggregate([
                {
                    $facet:{
                        Total: [{$count: 'total'}],
                        Row: [{$skip: skipRow}, {$limit: perPage}]
                    }
                }
            ])
        }
        res.status(200).json({data})
    }catch(err){
        next(err);
    }
}