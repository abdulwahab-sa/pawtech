import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: '/loginuser',
				method: 'POST',
				body: data,
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: '/registeruser',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = userApiSlice;
