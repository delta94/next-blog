import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Post} from "./Post";
import {Comment} from './Comment'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  username: string;
  @Column('varchar')
  password: string;
  @CreateDateColumn('timestamp')
  createdAt: Date;
  @UpdateDateColumn('timestamp')
  updatedAt: Date;
  @OneToMany(type => Post, post => post.user)
  posts: Post[];
  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];
}
