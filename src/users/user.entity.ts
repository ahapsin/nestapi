// src/products/product.entity.ts

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Menandakan ini adalah tabel
export class User {
  @PrimaryGeneratedColumn() // ID otomatis (Auto Increment)
  id: number;

  @Column()
  name: string;
}
