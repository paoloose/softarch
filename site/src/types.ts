import type { AstroInstance } from 'astro'

export type ProjectMetadata = {
  title: string
  description: string
  img: string
}

export type ProjectPageInstance = AstroInstance & {
  metadata: ProjectMetadata
}

export type ProjectPage = {
  page: ProjectPageInstance
}

export type ASTBinaryOperator = {
  type: 'operator.implies' | 'operator.iff' | 'operator.or' | 'operator.and',
  left: ASTNode,
  right: ASTNode
}

export type ASTLiteral = {
  type: 'literal',
  value: boolean
}

export type ASTIdentifier = {
  type: 'identifier',
  name: string
}

export type ASTUnaryOperator = {
  type: 'operator.not',
  operand: ASTNode
}

export type ASTOperator = ASTBinaryOperator | ASTUnaryOperator;

export type ASTNode =
  ASTOperator |
  ASTLiteral |
  ASTIdentifier;

export type LogicParserSuccessResult = {
  status: 'success',
  ast: ASTNode
}

export type LogicParserErrorResult = {
  status: 'error',
  error: string,
  span: [start: number, end: number]
}

export type LogicParsingResult = LogicParserSuccessResult | LogicParserErrorResult;

type TokenIdentifier = {
  kind: 'identifier',
  value: string
}
type TokenLiteral = {
  kind: 'literal',
  value: boolean
}
type TokenNot = {
  kind: 'not';
}
type TokenAnd = {
  kind: 'and';
}
type TokenOr = {
  kind: 'or';
}
type TokenImplies = {
  kind: 'implies';
}
type TokenIfAndOnlyIf = {
  kind: 'iff';
}
type TokenOpenParen = {
  kind: 'openparen';
}
type TokenCloseParen = {
  kind: 'closeparen';
}

export type TokenKind =
  TokenIdentifier |
  TokenLiteral |
  TokenNot |
  TokenAnd |
  TokenOr |
  TokenImplies |
  TokenIdentifier |
  TokenIfAndOnlyIf |
  TokenOpenParen |
  TokenCloseParen;

export type Token = TokenKind & { span: [start: number, end: number] };

/* lab02 */

export type StudentInformation = {
  studentCode: string,
  surname: string,
  name: string,
  age: number,
  gender: string,
  weight: number,
  height: number,
  favoriteColor: string,
  province: string,
  careerId: number,
  enrollDate: string,
}

export type CareerInformation = {
  id: number,
  name: string,
  creationDate: string,
  observations: string,
}

export type CountStudentsByCareerResponse = Array<{
  career: CareerInformation,
  count: number,
}>;

export type CareersResponse = Array<CareerInformation>;

export type StudentsByCareerResponse = Record<string, Array<StudentInformation>>;

export interface QueriedRecordResult {
  id: string;
  mimetype: string;
  tags: string[];
}
