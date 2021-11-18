import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, Table, Menu, Dropdown, Tag } from 'antd';
import { useHistory } from 'react-router-dom';

import Moment from 'moment';
import Layout from '../../containers/Layout';
import { Card } from '../../commons';
import { CardBoard } from '../../components';

function DomainItem() {
 	
	let vr = {useHistory}.useHistory().location.pathname;
	let vrNew =  vr.replace("/domainitem/", "");

	return (
		<Layout>
		  <Card className="col-lg-12 col-xl-12">
		  		<h2 className="postCount">Post Count : <span>32</span> posts.</h2>
			  		<div className="ant-table-wrapper">
					  <div className="ant-spin-nested-loading">
						  <div className="ant-spin-container">
							  <div className="ant-table">
								  <div className="ant-table-container">
									  <div className="ant-table-content">
										  <table>
											  <colgroup></colgroup>
											  <thead className="ant-table-thead">
												  <tr>
													  <th className="ant-table-cell ant-table-column-sort ant-table-column-has-sorters">
														  <div className="ant-table-column-sorters-with-tooltip">
															  <div className="ant-table-column-sorters">
																  <span>No</span>
																  <span className="ant-table-column-sorter">
																	  <span className="ant-table-column-sorter-inner">
																		  <span role="img" aria-label="caret-down" className="anticon anticon-caret-down ant-table-column-sorter-down active">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
																			  </svg>
																		  </span>
																	  </span>
																  </span>
															  </div>
														  </div>
													  </th>
													  <th className="ant-table-cell ant-table-column-has-sorters">
														  <div className="ant-table-column-sorters-with-tooltip">
															  <div className="ant-table-column-sorters">
																  <span>Title</span>
																  <span className="ant-table-column-sorter ant-table-column-sorter-full">
																	  <span className="ant-table-column-sorter-inner">
																		  <span role="img" aria-label="caret-up" className="anticon anticon-caret-up ant-table-column-sorter-up">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
																			  </svg>
																		  </span>
																		  <span role="img" aria-label="caret-down" className="anticon anticon-caret-down ant-table-column-sorter-down">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
																			  </svg>
																		  </span>
																	  </span>
																  </span>
															  </div>
														  </div>
													  </th>
													  <th className="ant-table-cell ant-table-column-has-sorters">
														  <div className="ant-table-column-sorters-with-tooltip">
															  <div className="ant-table-column-sorters">
																  <span>Url</span>
																  <span className="ant-table-column-sorter ant-table-column-sorter-full">
																	  <span className="ant-table-column-sorter-inner">
																		  <span role="img" aria-label="caret-up" className="anticon anticon-caret-up ant-table-column-sorter-up">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
																			  </svg>
																		  </span>
																		  <span role="img" aria-label="caret-down" className="anticon anticon-caret-down ant-table-column-sorter-down">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
																			  </svg>
																		  </span>
																	  </span>
																  </span>
															  </div>
														  </div>
													  </th>
													  <th className="ant-table-cell ant-table-column-has-sorters">
														  <div className="ant-table-column-sorters-with-tooltip">
															  <div className="ant-table-column-sorters">
																  <span>Group</span>
																  <span className="ant-table-column-sorter ant-table-column-sorter-full">
																	  <span className="ant-table-column-sorter-inner">
																		  <span role="img" aria-label="caret-up" className="anticon anticon-caret-up ant-table-column-sorter-up">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
																			  </svg>
																		  </span>
																		  <span role="img" aria-label="caret-down" className="anticon anticon-caret-down ant-table-column-sorter-down">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
																			  </svg>
																		  </span>
																	  </span>
																  </span>
															  </div>
														  </div>
													  </th>
													  <th className="ant-table-cell ant-table-column-has-sorters">
														  <div className="ant-table-column-sorters-with-tooltip">
															  <div className="ant-table-column-sorters">
																  <span>Status</span>
																  <span className="ant-table-column-sorter ant-table-column-sorter-full">
																	  <span className="ant-table-column-sorter-inner">
																		  <span role="img" aria-label="caret-up" className="anticon anticon-caret-up ant-table-column-sorter-up">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
																			  </svg>
																		  </span>
																		  <span role="img" aria-label="caret-down" className="anticon anticon-caret-down ant-table-column-sorter-down">
																			  <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																				  <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
																			  </svg>
																		  </span>
																	  </span>
																  </span>
															  </div>
														  </div>
													  </th>
													  <th className="ant-table-cell">Date</th>
													  <th className="ant-table-cell">Action</th>
												  </tr>
											  </thead>
											  <tbody className="ant-table-tbody">
												  <tr data-row-key="50" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">50</td>
													  <td className="ant-table-cell">
														  <span>SVG Generators</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">crypto</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 21, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="49" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">49</td>
													  <td className="ant-table-cell">
														  <span>Growing UX Maturity: Knowledge Sharing And Mentors</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">company</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 20, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="48" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">48</td>
													  <td className="ant-table-cell">
														  <span>How To Boost Media Performance On A Budget</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">blog</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 20, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="47" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">47</td>
													  <td className="ant-table-cell">
														  <span>quibusdam cumque rem aut deserunt</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">blog</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 19, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="46" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">46</td>
													  <td className="ant-table-cell">
														  <span>aut quo modi neque nostrum ducimus</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">company</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 18, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="45" className="ant-table-row ant-table-row-level-0 row-fail">
													  <td className="ant-table-cell ant-table-column-sort">45</td>
													  <td className="ant-table-cell">
														  <span>ut numquam possimus omnis eius suscipit laudantium</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">crypto</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-volcano">FAIL</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 17, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="44" className="ant-table-row ant-table-row-level-0 row-fail">
													  <td className="ant-table-cell ant-table-column-sort">44</td>
													  <td className="ant-table-cell">
														  <span>optio dolor molestias sit</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">company</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-volcano">FAIL</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 16, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="43" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">43</td>
													  <td className="ant-table-cell">
														  <span>eligendi iste nostrum consequuntur adipisci praese</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">news</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 15, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="42" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">42</td>
													  <td className="ant-table-cell">
														  <span>commodi ullam sint et excepturi error explicabo pr</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">company</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 14, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
												  <tr data-row-key="41" className="ant-table-row ant-table-row-level-0 row-success">
													  <td className="ant-table-cell ant-table-column-sort">41</td>
													  <td className="ant-table-cell">
														  <span>non est facere</span>
													  </td>
													  <td className="ant-table-cell">
														  <div>
															  <a href="#" className="lowercase">{vrNew}</a>
														  </div>
													  </td>
													  <td className="ant-table-cell">company</td>
													  <td className="ant-table-cell">
														  <span className="ant-tag ant-tag-success">SUCCESS</span>
													  </td>
													  <td className="ant-table-cell">
														  <span>March 13, 2021</span>
													  </td>
													  <td className="ant-table-cell">
														  <div className="ant-dropdown-trigger ant-dropdown-link d-flex align-items-center cursor-pointer">Actions 
															  <span role="img" aria-label="down" className="anticon anticon-down ml-2">
																  <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
																	  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
																  </svg>
															  </span>
														  </div>
													  </td>
												  </tr>
											  </tbody>
										  </table>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			 
		  </Card>
		</Layout>
	);
  	
}

export default DomainItem;
