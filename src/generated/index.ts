// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListTypes = {
  __typename?: 'ListTypes';
  _id: Scalars['ID']['output'];
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ListTypesInput = {
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<ListTypes>;
  deleteTodo?: Maybe<ListTypes>;
  editTodo?: Maybe<ListTypes>;
};


export type MutationCreateTodoArgs = {
  item?: InputMaybe<ListTypesInput>;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditTodoArgs = {
  id: Scalars['ID']['input'];
  item?: InputMaybe<ListTypesInput>;
};

export type Query = {
  __typename?: 'Query';
  getTodos?: Maybe<Array<Maybe<ListTypes>>>;
};

export type CreateTodoMutationVariables = Exact<{
  item?: InputMaybe<ListTypesInput>;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'ListTypes', _id: string, title?: string | null, status?: string | null } | null };

export type EditTodoMutationVariables = Exact<{
  editTodoId: Scalars['ID']['input'];
  item?: InputMaybe<ListTypesInput>;
}>;


export type EditTodoMutation = { __typename?: 'Mutation', editTodo?: { __typename?: 'ListTypes', _id: string, title?: string | null, status?: string | null } | null };

export type DeleteTodoMutationVariables = Exact<{
  deleteTodoId: Scalars['ID']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: { __typename?: 'ListTypes', title?: string | null } | null };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', getTodos?: Array<{ __typename?: 'ListTypes', _id: string, title?: string | null, status?: string | null } | null> | null };


export const CreateTodoDocument = gql`
    mutation CreateTodo($item: ListTypesInput) {
  createTodo(item: $item) {
    _id
    title
    status
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;
export type CreateTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>
    } & TChildProps;
export function withCreateTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  CreateTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTodoMutation, CreateTodoMutationVariables, CreateTodoProps<TChildProps, TDataName>>(CreateTodoDocument, {
      alias: 'createTodo',
      ...operationOptions
    });
};

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      item: // value for 'item'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const EditTodoDocument = gql`
    mutation EditTodo($editTodoId: ID!, $item: ListTypesInput) {
  editTodo(id: $editTodoId, item: $item) {
    _id
    title
    status
  }
}
    `;
export type EditTodoMutationFn = Apollo.MutationFunction<EditTodoMutation, EditTodoMutationVariables>;
export type EditTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditTodoMutation, EditTodoMutationVariables>
    } & TChildProps;
export function withEditTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditTodoMutation,
  EditTodoMutationVariables,
  EditTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditTodoMutation, EditTodoMutationVariables, EditTodoProps<TChildProps, TDataName>>(EditTodoDocument, {
      alias: 'editTodo',
      ...operationOptions
    });
};

/**
 * __useEditTodoMutation__
 *
 * To run a mutation, you first call `useEditTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTodoMutation, { data, loading, error }] = useEditTodoMutation({
 *   variables: {
 *      editTodoId: // value for 'editTodoId'
 *      item: // value for 'item'
 *   },
 * });
 */
export function useEditTodoMutation(baseOptions?: Apollo.MutationHookOptions<EditTodoMutation, EditTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTodoMutation, EditTodoMutationVariables>(EditTodoDocument, options);
      }
export type EditTodoMutationHookResult = ReturnType<typeof useEditTodoMutation>;
export type EditTodoMutationResult = Apollo.MutationResult<EditTodoMutation>;
export type EditTodoMutationOptions = Apollo.BaseMutationOptions<EditTodoMutation, EditTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($deleteTodoId: ID!) {
  deleteTodo(id: $deleteTodoId) {
    title
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;
export type DeleteTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>
    } & TChildProps;
export function withDeleteTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTodoMutation,
  DeleteTodoMutationVariables,
  DeleteTodoProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTodoMutation, DeleteTodoMutationVariables, DeleteTodoProps<TChildProps, TDataName>>(DeleteTodoDocument, {
      alias: 'deleteTodo',
      ...operationOptions
    });
};

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      deleteTodoId: // value for 'deleteTodoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetTodosDocument = gql`
    query GetTodos {
  getTodos {
    _id
    title
    status
  }
}
    `;
export type GetTodosProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTodosQuery, GetTodosQueryVariables>
    } & TChildProps;
export function withGetTodos<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTodosQuery,
  GetTodosQueryVariables,
  GetTodosProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTodosQuery, GetTodosQueryVariables, GetTodosProps<TChildProps, TDataName>>(GetTodosDocument, {
      alias: 'getTodos',
      ...operationOptions
    });
};

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export function useGetTodosSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosSuspenseQueryHookResult = ReturnType<typeof useGetTodosSuspenseQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;