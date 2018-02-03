---
title: "Plat Builder Exercise #3"
date: "2018-01-03"
---

In this exercise, we will **Create a Plat Package with Tract Sketches** so that we can learn the workflow for **Assigning Tract Sketches** and **Refreshing Plat Packages**.

## What is a Tract Sketch?

Before we start, let's define a **Tract Sketch**.

<dl>
  <dt>Tract Sketch</dt>
  <dd>A temporary polygon that is used as a placeholder for a tract that does not yet exist in REIOS. Tract Sketches have a <strong>name</strong> so they are easy to remember.</dd>
</dl>

Since they are placeholders, sketches are only intended to be used **when you expect a tract to be created in REIOS at a later time**.

## Create a new Plat Package with a Sketch

1. Start a **New Plat Package** from the **Plat Builder Homepage**.

    - If you have any tracts already listed, go ahead and remove them.

2. Click **Create Tract Sketch** and use **Draw on Map** or **Select CLU** to create a shape for your sketch.

    After clicking **Confirm** on the **Draw Toolbar**, you'll notice a new dialog asking you to **Name Your Sketch**. Give your sketch a memorable name and click **Submit**.

    - After submitting your sketch, you will see it added to both the map and your tracts list sidebar. Note that **Tract Sketches are pink in color**, making it easy to differentiate them from tracts.

    - Try clicking your new sketch on the map. In the popup, you'll notice that, in addition to the name you gave it, your sketch also remembers **who created it**, **when it was created**, and **how many acres it contains**.

3. Click **Continue** to proceed to the **Data Sections** step.

    Since we've explored the various **Data Sections** and **Editable Layers** in Exercise #1, we'll just accept the default sections and not choose any editable layers for this package.

⚠️ If including a Land Use layer is a part of your typical workflow, go ahead and include that now. Otherwise, its not necessary.

4. Click **Continue** on the next two steps.

    - On the **Review and Share** page, notice that your sketch is listed under **Tracts** below the map, and has an informational icon next to it. Hover over this icon to see that Plat Builder is alerting you that REIOS information will not be available since you've create a tract sketch instead of an actual tract.

5. On the **Review and Share** page, give your package a name and description. Then **Submit your Plat Package**.

6. Once your package has been created, click **Back to Dashboard**.

## The Plat Builder Dashboard

We've seen the Plat Builder dashboard before - its on the homepage we land on when we click the link from MAPS. This page lists all of the Plat Packages that have been created at MetLife.

Let's take a look at what this page has to offer:

- From the **header**, we can **Create New Plat** (which we've used a few times now) or **Assign Sketches** (we'll talk about this in a moment).

- The rest of the page is dedicated to **listing existing packages** and **allowing you to search them**. Try playing around with the search options and notice how they filter the list of packages.

The list of packages itself is what we want to focus on. You can see the **package name**, **package owner**, **package status**, and **creation date**. Packages are displayed with a warning icon if they are incomplete, and a green check if they are complete. Time for another definition!

<dl>
  <dt>Plat Package Status</dt>
  <dd>A Plat Package's status is determined by whether it contains sketches or not. Since sketches are only placeholders, <strong>a package is considered incomplete if it has any sketches</strong>.</dd>
</dl>

## The Package Details Page

1. Click on the package you created in the first section of this exercise.

    You are now viewing the **Package Details** page. This page gives you a review of the tracts/sketches, data sections, and editable layers it contains. Additionally, you can see the package name, who created it, when it was created, and when it was last modified (unless it never has been).

    >If the package is **incomplete**, you will also see a card prompting you to **Assign Tract Sketches**.

    Finally, can launch the webmap or view/edit/refresh the package (we'll talk about these later).

2. Click **View Plat Package** and look through your package - notice that there is no loan or tract information in it since we haven't associated any loans or tracts from REIOS.

    Once you've looked over your package, return to the Package Details page for the next step.

## Assigning Tract Sketches

Let's think back on our scenario at this point. We've create a plat package using a sketch because we needed to start the package before a tract had been entered into REIOS.

At this point we'll imagine a few hours or days have passed, and our tract has been entered into REIOS, and we're ready to move forward with our package.

# 🕐 🕒 🕕 🕘 🕛

Ok, let's get back to it.

1. From the **Package Details** page, click **Assign Tract Sketches**.

    - You will now see the **Assigner** page of Plat Builder. This page is dedicated to just one thing: turning sketches into tracts.

    - Its important to note that you could also come to the **Assigner** page by clicking the link in the header of the home page. However, **when you come through the Package Details page, the list of sketches is already filtered for you**.

    To illustrate this, open the Plat Builder home page in a new tab and click **Assign Sketches**. You will notice that you land on the same page, but this time you're seeing **every sketch in the system**. There are some handy search and filter tools above the list of sketches that you can check out now.

    In addition, you can click sketches on the map, and choose **Select Sketch** to filter the list. This can be handy if you know where your sketch is, but you're not sure how to search for it.


2. Back on the assigner page we launched in step 1, click the  **Assign to Tract** button on your sketch in the left sidebar.

    You'll see the familiar **Loan Search** dialog that we used when we were adding tracts to our package in previous exercises. It works the same here, except our goal is to find the tract we want to assign our sketch to.

    Again, we're going to have to pretend that the tract we are interested in got entered into REIOS in the time since we create our package.

3. Find a tract that doesn't have a shape, and click **Assign Sketch**. Click **Continue** on the confirmation dialog.

    - At this point, you'll see a confirmation popup at the bottom of the screen.

## Refreshing a Plat Package

1. Click **Home**, then click back into the **Package Details** page for the package we've been working with throughout this exercise.

    When you get back to the Package Details page, you'll notice a slight difference. The card where we were previously alerted about our unassigned sketch now says **All Tract Sketches Assigned** and prompts us to **Refresh the Plat Package**.

    <dl>
      <dt>Refreshing a Plat Package</dt>
      <dd>Refreshing a Plat Package allows rebuild your package using any updated information. This is primarily useful when you need to pull in new attributes from REIOS, when your tract shapes have changed, or when you have new land use features.</dd>
    </dl>

2. Click **Refresh Plat Package**.

    - Note that you can always find this option by clicking the dropdown arrow next to the **View Plat Package** button.

    You'll be presented with a confirmation dialog asking if you're sure you want to refresh your package. It is important to remember that **refreshing a package overwrites changes made using the Map Journal Builder**. If you're not sure what this means yet - don't worry, we're going to dive into that topic in another exercise!

3. Click **Yes** to refresh your package.

4. Once the refresh completes, click **View Plat Package**.

Congratulations! You've now assigned your sketch to a real tract from REIOS, and your Plat Package has been refreshed to include that loan/tract information.
