import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { getEnabledCategories } from 'trace_events';
import { ProductsService } from '../../Service/Products/products.service';
import { UsersService } from '../../Service/Users/users.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
//import User from './../../Model/User/entities/user.entity'
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Get('/categorie:id')
  async  findAll(@Param('id') id: string){
   const  categorie = await this.productsService.findCategorie(id)
    
  
  var str = JSON.stringify(categorie);
  console.log(str);
    
   return await this.productsService.findByCategorie(await this.productsService.findCategorie(id))
   
  
  }
  

  

  //@Get(':id')
  //findOne(@Param('id') id: string) {
   // return this.productsService.findOne(+id);
  //}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
  @Get('/:id')
  async  findAlll(@Param('id') id: string){
   const  categorie = await this.productsService.findCategorie(id)
    
  
  var str = JSON.stringify(categorie);
 
    
   return await this.productsService.findByCategorie("Vetement")
   
  
  }  
}
