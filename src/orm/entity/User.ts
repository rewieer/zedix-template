import {
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  emailAddress: string;

  @Column()
  password: string;

  @Column()
  role: string = "user";

  @Column()
  createdAt: Date;

  @Column()
  lastLoginAt: Date;

  @Column()
  code: string;
}
