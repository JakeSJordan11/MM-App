/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  EnumMoodTypeFieldUpdateOperationsInput: { // input type
    set?: NexusGenEnums['MoodType'] | null; // MoodType
  }
  EnumMoodTypeFilter: { // input type
    equals?: NexusGenEnums['MoodType'] | null; // MoodType
    in?: NexusGenEnums['MoodType'][] | null; // [MoodType!]
    not?: NexusGenInputs['NestedEnumMoodTypeFilter'] | null; // NestedEnumMoodTypeFilter
    notIn?: NexusGenEnums['MoodType'][] | null; // [MoodType!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  IntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  MoodCreateNestedManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['MoodWhereUniqueInput'][] | null; // [MoodWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['MoodCreateOrConnectWithoutUserInput'][] | null; // [MoodCreateOrConnectWithoutUserInput!]
    create?: NexusGenInputs['MoodCreateWithoutUserInput'][] | null; // [MoodCreateWithoutUserInput!]
  }
  MoodCreateOrConnectWithoutUserInput: { // input type
    create: NexusGenInputs['MoodCreateWithoutUserInput']; // MoodCreateWithoutUserInput!
    where: NexusGenInputs['MoodWhereUniqueInput']; // MoodWhereUniqueInput!
  }
  MoodCreateWithoutUserInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    intesity?: number | null; // Int
    mood: NexusGenEnums['MoodType']; // MoodType!
    title: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  MoodScalarWhereInput: { // input type
    AND?: NexusGenInputs['MoodScalarWhereInput'][] | null; // [MoodScalarWhereInput!]
    NOT?: NexusGenInputs['MoodScalarWhereInput'][] | null; // [MoodScalarWhereInput!]
    OR?: NexusGenInputs['MoodScalarWhereInput'][] | null; // [MoodScalarWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    intesity?: NexusGenInputs['IntNullableFilter'] | null; // IntNullableFilter
    mood?: NexusGenInputs['EnumMoodTypeFilter'] | null; // EnumMoodTypeFilter
    title?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    userId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  MoodUpdateManyMutationInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    intesity?: NexusGenInputs['NullableIntFieldUpdateOperationsInput'] | null; // NullableIntFieldUpdateOperationsInput
    mood?: NexusGenInputs['EnumMoodTypeFieldUpdateOperationsInput'] | null; // EnumMoodTypeFieldUpdateOperationsInput
    title?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  MoodUpdateManyWithWhereWithoutUserInput: { // input type
    data: NexusGenInputs['MoodUpdateManyMutationInput']; // MoodUpdateManyMutationInput!
    where: NexusGenInputs['MoodScalarWhereInput']; // MoodScalarWhereInput!
  }
  MoodUpdateManyWithoutUserInput: { // input type
    connect?: NexusGenInputs['MoodWhereUniqueInput'][] | null; // [MoodWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['MoodCreateOrConnectWithoutUserInput'][] | null; // [MoodCreateOrConnectWithoutUserInput!]
    create?: NexusGenInputs['MoodCreateWithoutUserInput'][] | null; // [MoodCreateWithoutUserInput!]
    delete?: NexusGenInputs['MoodWhereUniqueInput'][] | null; // [MoodWhereUniqueInput!]
    deleteMany?: NexusGenInputs['MoodScalarWhereInput'][] | null; // [MoodScalarWhereInput!]
    disconnect?: NexusGenInputs['MoodWhereUniqueInput'][] | null; // [MoodWhereUniqueInput!]
    set?: NexusGenInputs['MoodWhereUniqueInput'][] | null; // [MoodWhereUniqueInput!]
    update?: NexusGenInputs['MoodUpdateWithWhereUniqueWithoutUserInput'][] | null; // [MoodUpdateWithWhereUniqueWithoutUserInput!]
    updateMany?: NexusGenInputs['MoodUpdateManyWithWhereWithoutUserInput'][] | null; // [MoodUpdateManyWithWhereWithoutUserInput!]
    upsert?: NexusGenInputs['MoodUpsertWithWhereUniqueWithoutUserInput'][] | null; // [MoodUpsertWithWhereUniqueWithoutUserInput!]
  }
  MoodUpdateWithWhereUniqueWithoutUserInput: { // input type
    data: NexusGenInputs['MoodUpdateWithoutUserInput']; // MoodUpdateWithoutUserInput!
    where: NexusGenInputs['MoodWhereUniqueInput']; // MoodWhereUniqueInput!
  }
  MoodUpdateWithoutUserInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    intesity?: NexusGenInputs['NullableIntFieldUpdateOperationsInput'] | null; // NullableIntFieldUpdateOperationsInput
    mood?: NexusGenInputs['EnumMoodTypeFieldUpdateOperationsInput'] | null; // EnumMoodTypeFieldUpdateOperationsInput
    title?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  MoodUpsertWithWhereUniqueWithoutUserInput: { // input type
    create: NexusGenInputs['MoodCreateWithoutUserInput']; // MoodCreateWithoutUserInput!
    update: NexusGenInputs['MoodUpdateWithoutUserInput']; // MoodUpdateWithoutUserInput!
    where: NexusGenInputs['MoodWhereUniqueInput']; // MoodWhereUniqueInput!
  }
  MoodWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedEnumMoodTypeFilter: { // input type
    equals?: NexusGenEnums['MoodType'] | null; // MoodType
    in?: NexusGenEnums['MoodType'][] | null; // [MoodType!]
    not?: NexusGenInputs['NestedEnumMoodTypeFilter'] | null; // NestedEnumMoodTypeFilter
    notIn?: NexusGenEnums['MoodType'][] | null; // [MoodType!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedIntNullableFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntNullableFilter'] | null; // NestedIntNullableFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableIntFieldUpdateOperationsInput: { // input type
    decrement?: number | null; // Int
    divide?: number | null; // Int
    increment?: number | null; // Int
    multiply?: number | null; // Int
    set?: number | null; // Int
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  ProfileCreateNestedOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['ProfileWhereUniqueInput'] | null; // ProfileWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProfileCreateOrConnectWithoutUserInput'] | null; // ProfileCreateOrConnectWithoutUserInput
    create?: NexusGenInputs['ProfileCreateWithoutUserInput'] | null; // ProfileCreateWithoutUserInput
  }
  ProfileCreateOrConnectWithoutUserInput: { // input type
    create: NexusGenInputs['ProfileCreateWithoutUserInput']; // ProfileCreateWithoutUserInput!
    where: NexusGenInputs['ProfileWhereUniqueInput']; // ProfileWhereUniqueInput!
  }
  ProfileCreateWithoutUserInput: { // input type
    bio?: string | null; // String
  }
  ProfileUpdateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['ProfileWhereUniqueInput'] | null; // ProfileWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProfileCreateOrConnectWithoutUserInput'] | null; // ProfileCreateOrConnectWithoutUserInput
    create?: NexusGenInputs['ProfileCreateWithoutUserInput'] | null; // ProfileCreateWithoutUserInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['ProfileUpdateWithoutUserInput'] | null; // ProfileUpdateWithoutUserInput
    upsert?: NexusGenInputs['ProfileUpsertWithoutUserInput'] | null; // ProfileUpsertWithoutUserInput
  }
  ProfileUpdateWithoutUserInput: { // input type
    bio?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
  }
  ProfileUpsertWithoutUserInput: { // input type
    create: NexusGenInputs['ProfileCreateWithoutUserInput']; // ProfileCreateWithoutUserInput!
    update: NexusGenInputs['ProfileUpdateWithoutUserInput']; // ProfileUpdateWithoutUserInput!
  }
  ProfileWhereUniqueInput: { // input type
    id?: number | null; // Int
    userId?: number | null; // Int
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    email: string; // String!
    moods?: NexusGenInputs['MoodCreateNestedManyWithoutUserInput'] | null; // MoodCreateNestedManyWithoutUserInput
    name?: string | null; // String
    profile?: NexusGenInputs['ProfileCreateNestedOneWithoutUserInput'] | null; // ProfileCreateNestedOneWithoutUserInput
  }
  UserUpdateInput: { // input type
    email?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    moods?: NexusGenInputs['MoodUpdateManyWithoutUserInput'] | null; // MoodUpdateManyWithoutUserInput
    name?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    profile?: NexusGenInputs['ProfileUpdateOneWithoutUserInput'] | null; // ProfileUpdateOneWithoutUserInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  MoodType: "ANXIOUS" | "FEARFUL" | "HAPPY" | "SAD"
  QueryMode: "default" | "insensitive"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mood: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    intesity?: number | null; // Int
    mood: NexusGenEnums['MoodType']; // MoodType!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mood: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    intesity: number | null; // Int
    mood: NexusGenEnums['MoodType']; // MoodType!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
    deleteOneUser: NexusGenRootTypes['User'] | null; // User
    updateOneUser: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    mood: NexusGenRootTypes['Mood'] | null; // Mood
    moods: NexusGenRootTypes['Mood'][]; // [Mood!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    moods: NexusGenRootTypes['Mood'][]; // [Mood!]!
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mood: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    intesity: 'Int'
    mood: 'MoodType'
    title: 'String'
    updatedAt: 'DateTime'
    user: 'User'
  }
  Mutation: { // field return type name
    createOneUser: 'User'
    deleteOneUser: 'User'
    updateOneUser: 'User'
  }
  Query: { // field return type name
    mood: 'Mood'
    moods: 'Mood'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    moods: 'Mood'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteOneUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateOneUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    mood: { // args
      where: NexusGenInputs['MoodWhereUniqueInput']; // MoodWhereUniqueInput!
    }
    moods: { // args
      after?: NexusGenInputs['MoodWhereUniqueInput'] | null; // MoodWhereUniqueInput
      before?: NexusGenInputs['MoodWhereUniqueInput'] | null; // MoodWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    moods: { // args
      after?: NexusGenInputs['MoodWhereUniqueInput'] | null; // MoodWhereUniqueInput
      before?: NexusGenInputs['MoodWhereUniqueInput'] | null; // MoodWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}